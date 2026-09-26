import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { Pencil, Printer, RotateCcw, ListOrdered, Lightbulb, BookOpen, Info } from 'lucide-react';
import { useAssessment } from '../assessment/AssessmentContext';
import { CATEGORIES, ALL_SUBSECTIONS, getSubsections } from '../assessment/categoryConfig';
import { generateComparison } from '../../domain/compare';
import { generateRecommendations } from '../../domain/recommend';
import { generateActionPlan } from '../../domain/actionPlan';
import demoFactors from '../../data/demo/factors.json';
import projectData from '../../data/project.json';
import type { ActivityGroup } from '../../domain/types';
import CarbonReportVideoBackground from './CarbonReportVideoBackground';

const GROUP_COLORS: Record<ActivityGroup, string> = {
  fuel_combustion: '#FF6B4A',
  vehicle_operations: '#4EA1FF',
  gas_leakage: '#B073FF',
  production_activities: '#F5C56B',
  electricity_utilities: '#61DCC8',
  purchased_energy: '#B7FF5A',
};

const CATEGORY_LABEL: Record<ActivityGroup, string> = Object.fromEntries(
  CATEGORIES.map(c => [c.id, c.navLabel])
) as Record<ActivityGroup, string>;

const SUBSECTION_LABEL: Record<string, string> = Object.fromEntries(
  ALL_SUBSECTIONS.map(s => [s.id, s.label])
);

const SUBSECTION_GROUP_MAP: Record<string, ActivityGroup> = {};
CATEGORIES.forEach(cat => {
  getSubsections(cat).forEach(sub => {
    SUBSECTION_GROUP_MAP[sub.id] = cat.id;
  });
});

/**
 * `reduceMotion` is optional so this component keeps working even if the
 * caller doesn't pass it. Defaults to `false` (video plays normally).
 */
export default function CarbonReport({ reduceMotion = false }: { reduceMotion?: boolean }) {
  const navigate = useNavigate();
  const { result, computeResult, restart } = useAssessment();

  // Force a fresh calculation every time you open the report
  useEffect(() => {
    computeResult();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const comparison = useMemo(() => (result ? generateComparison(result) : null), [result]);

  const allFactors = projectData.activeMode === 'demo' ? demoFactors : [];
  const recommendations = useMemo(
    () => (result ? generateRecommendations(result, allFactors as any) : []),
    [result]
  );
  const actionPlan = useMemo(() => (result ? generateActionPlan(result) : []), [result]);

  if (!result) {
    return (
      <div className="relative w-full min-h-screen overflow-hidden">
        <CarbonReportVideoBackground reduceMotion={reduceMotion} />

        <div className="relative z-10 max-w-[1200px] mx-auto w-full px-4 md:px-6 py-16">
          <div className="bg-[var(--color-ca-panel)] rounded-2xl border border-[#23382D] p-10 text-center">
            <p className="text-[var(--color-ca-text-secondary)] mb-6">No answers recorded yet. Complete the assessment to generate your Carbon Report.</p>
            <button
              onClick={() => navigate('/assessment/fuel_combustion')}
              className="px-6 py-2.5 rounded-lg bg-[var(--color-ca-lime)] text-[var(--color-ca-main)] font-semibold"
            >
              Start Assessment
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { totalEmissionsKg, totalsByGroup, period, items } = result;
  const displayTotal = (totalEmissionsKg / 1000).toFixed(2);
  const totalInTonnes = totalEmissionsKg / 1000;

  // Calculate Direct and Indirect emissions
  const directEmissions = 
    (totalsByGroup['fuel_combustion'] || 0) +
    (totalsByGroup['vehicle_operations'] || 0) +
    (totalsByGroup['gas_leakage'] || 0) +
    (totalsByGroup['production_activities'] || 0);

  const indirectEmissions = 
    (totalsByGroup['electricity_utilities'] || 0) +
    (totalsByGroup['purchased_energy'] || 0);

  const directPercent = totalEmissionsKg > 0 ? (directEmissions / totalEmissionsKg) * 100 : 0;
  const indirectPercent = totalEmissionsKg > 0 ? (indirectEmissions / totalEmissionsKg) * 100 : 0;

  const pieData = CATEGORIES.map(category => {
    const value = totalsByGroup[category.id] || 0;
    return {
      name: category.navLabel,
      value: Number((value / 1000).toFixed(3)),
      group: category.id,
    };
  });

  const allActivitiesData = ALL_SUBSECTIONS.map((sub, index) => {
    const item = items.find(i => i.activityId === sub.id);
    const hue = (index * 137.5) % 360; 
    return {
      name: sub.label,
      value: item ? Number((item.emissionsKg / 1000).toFixed(3)) : 0,
      group: SUBSECTION_GROUP_MAP[sub.id] || 'fuel_combustion',
      color: `hsl(${hue}, 70%, 60%)`
    };
  }).sort((a, b) => b.value - a.value);

  const topItem = items.length > 0 ? [...items].sort((a, b) => b.emissionsKg - a.emissionsKg)[0] : null;

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Full-page background video */}
      <CarbonReportVideoBackground reduceMotion={reduceMotion} />

      {/* All report content, sitting above the video */}
      <div className="relative z-10 max-w-[1200px] mx-auto w-full px-4 md:px-6 py-16 printable-area text-[var(--color-ca-text-primary)]">
        <div className="ca-glass rounded-2xl p-6 md:p-10">
          <div className="flex justify-between items-start mb-8 flex-wrap gap-4">
            <div>
              <h2 className="text-sm font-medium text-[var(--color-ca-text-secondary)] uppercase tracking-wider mb-2">Total Carbon Footprint</h2>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl md:text-7xl font-bold font-mono ca-heading-gradient">{displayTotal}</span>
                <span className="text-xl md:text-2xl font-medium">tCO₂e</span>
              </div>
              <p className="text-sm text-[var(--color-ca-text-secondary)] mt-2">For the {period} reporting period</p>
            </div>
            <div className="flex gap-3 no-print">
              <button onClick={() => navigate('/assessment/fuel_combustion')} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#23382D] text-sm hover:bg-[var(--color-ca-elevated)] transition-colors">
                <Pencil size={14} /> Edit answers
              </button>
              <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#23382D] text-sm hover:bg-[var(--color-ca-elevated)] transition-colors">
                <Printer size={14} /> Print / Save as PDF
              </button>
            </div>
          </div>

          {result.isDemo && (
            <div className="mb-8 p-4 bg-[var(--color-ca-warning)]/10 border border-[var(--color-ca-warning)]/20 rounded-lg text-[var(--color-ca-warning)] text-sm">
              Used Bitopi Group's emission factors
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* LEFT COLUMN */}
            <div className="bg-[var(--color-ca-elevated)] rounded-xl border border-[#23382D] p-5 flex flex-col">
              <h3 className="text-sm font-semibold mb-4">Source Contribution (Headings)</h3>
              {pieData.some(d => d.value > 0) ? (
                <div className="flex-1 flex flex-col">
                  <ResponsiveContainer width="100%" height={260}>
                    <PieChart>
                      <Pie data={pieData} dataKey="value" nameKey="name" innerRadius={55} outerRadius={90} paddingAngle={2}>
                        {pieData.map(entry => (
                          <Cell key={entry.group} fill={GROUP_COLORS[entry.group]} stroke="none" />
                        ))}
                      </Pie>
                      <Tooltip
                        formatter={(value) => [`${value ?? 0} tCO₂e`, '']}
                        contentStyle={{ background: '#18261E', border: '1px solid #23382D', borderRadius: 8, color: '#F2F7F3' }}
                      />
                      <Legend wrapperStyle={{ fontSize: 12 }} />
                    </PieChart>
                  </ResponsiveContainer>

                  {/* Detailed Breakdown List */}
                  <div className="mt-6 border-t border-[#23382D] pt-4">
                    <h4 className="text-xs font-medium text-[var(--color-ca-text-secondary)] uppercase tracking-wider mb-3">Detailed Breakdown</h4>
                    <div className="space-y-3">
                      {pieData.map((entry) => {
                        const percent = totalInTonnes > 0 ? (entry.value / totalInTonnes) * 100 : 0;
                        return (
                          <div key={entry.group} className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2 truncate">
                              <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: GROUP_COLORS[entry.group as ActivityGroup] }}></span>
                              <span className="truncate text-[var(--color-ca-text-secondary)]">{entry.name}</span>
                            </div>
                            <div className="flex items-center gap-3 shrink-0">
                              <span className="font-mono font-medium text-[var(--color-ca-text-primary)]">{entry.value.toFixed(3)} t</span>
                              <span className="text-xs text-[var(--color-ca-text-secondary)] w-10 text-right">{percent.toFixed(1)}%</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Emissions Breakdown (Direct vs Indirect) */}
                  <div className="mt-6 border-t border-[#23382D] pt-4">
                    <h4 className="text-xs font-medium text-[var(--color-ca-text-secondary)] uppercase tracking-wider mb-3">
                      Emissions Breakdown
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-[var(--color-ca-text-secondary)]">Direct Emissions</span>
                          <span className="font-mono text-[var(--color-ca-text-primary)]">
                            {(directEmissions / 1000).toFixed(2)} t
                          </span>
                        </div>
                        <div className="w-full bg-[#23382D] rounded-full h-2">
                          <div 
                            className="bg-[var(--color-ca-lime)] h-2 rounded-full" 
                            style={{ width: `${directPercent}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-[var(--color-ca-text-secondary)] mt-1">
                          Fuel combustion, vehicles, fugitive gases, and processing.
                        </p>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-[var(--color-ca-text-secondary)]">Indirect Emissions</span>
                          <span className="font-mono text-[var(--color-ca-text-primary)]">
                            {(indirectEmissions / 1000).toFixed(2)} t
                          </span>
                        </div>
                        <div className="w-full bg-[#23382D] rounded-full h-2">
                          <div 
                            className="bg-[var(--color-ca-mint)] h-2 rounded-full" 
                            style={{ width: `${indirectPercent}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-[var(--color-ca-text-secondary)] mt-1">
                          Purchased electricity, steam, heat, and cooling.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Recommended Action Plan */}
                  <div className="mt-6 border-t border-[#23382D] pt-4">
                    <h4 className="text-xs font-medium text-[var(--color-ca-text-secondary)] uppercase tracking-wider mb-3">
                      Recommended Action Plan
                    </h4>
                    <ul className="space-y-3 text-sm text-[var(--color-ca-text-secondary)]">
                      {actionPlan.map((planItem, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="text-[var(--color-ca-lime)] font-bold">{idx + 1}.</span>
                          <span><strong>{planItem.title}:</strong> {planItem.description}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Glossary of Key Terms */}
                  <div className="mt-6 border-t border-[#23382D] pt-4">
                    <h4 className="text-xs font-medium text-[var(--color-ca-text-secondary)] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <BookOpen size={14} /> Glossary of Key Terms
                    </h4>
                    <dl className="space-y-3 text-sm text-[var(--color-ca-text-secondary)]">
                      <div>
                        <dt className="font-medium text-[var(--color-ca-text-primary)]">tCO₂e (Tonnes of CO₂ Equivalent)</dt>
                        <dd className="text-xs mt-0.5">The standard unit for measuring carbon footprints. It converts different greenhouse gases (like methane or refrigerants) into the equivalent amount of CO₂ based on their global warming potential.</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-[var(--color-ca-text-primary)]">Emission Factor</dt>
                        <dd className="text-xs mt-0.5">A representative value that relates the quantity of a pollutant released to the atmosphere with an activity associated with the release of that pollutant.</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-[var(--color-ca-text-primary)]">Direct Emissions</dt>
                        <dd className="text-xs mt-0.5">Emissions from sources that are owned or controlled by the company (e.g., fuel combustion, company vehicles).</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-[var(--color-ca-text-primary)]">Indirect Emissions</dt>
                        <dd className="text-xs mt-0.5">Emissions that are a consequence of the activities of the company but occur at sources owned or controlled by another company (e.g., purchased electricity).</dd>
                      </div>
                      <div>
                        <dt className="font-medium text-[var(--color-ca-text-primary)]">Fugitive Emissions</dt>
                        <dd className="text-xs mt-0.5">Intentional or unintentional releases of gases from pressurized equipment (e.g., refrigerant leaks from air conditioning).</dd>
                      </div>
                    </dl>
                  </div>

                  {/* Important Notes & Assumptions */}
                  <div className="mt-6 border-t border-[#23382D] pt-4 pb-2">
                    <h4 className="text-xs font-medium text-[var(--color-ca-text-secondary)] uppercase tracking-wider mb-3 flex items-center gap-2">
                      <Info size={14} /> Important Notes & Assumptions
                    </h4>
                    <ul className="space-y-2 text-xs text-[var(--color-ca-text-secondary)] list-disc list-inside">
                      <li>This report is generated based on the data provided in the assessment.</li>
                      <li>Emission factors used are region-specific (Bangladesh) where applicable.</li>
                      <li>Results are estimates and should be verified by a certified auditor before official submission.</li>
                      <li>Excluded from this calculation: Employee commuting, supply chain (upstream/downstream), and waste disposal outside of wastewater treatment.</li>
                    </ul>
                  </div>

                </div>
              ) : (
                <p className="text-sm text-[var(--color-ca-text-secondary)] py-10 text-center">No emissions recorded.</p>
              )}
            </div>

            {/* RIGHT COLUMN: Bar Chart */}
            <div className="bg-[var(--color-ca-elevated)] rounded-xl border border-[#23382D] p-5">
              <h3 className="text-sm font-semibold mb-1 flex items-center gap-2">
                <ListOrdered size={14} className="text-[var(--color-ca-mint)]" /> All Contributing Activities
              </h3>
              <p className="text-xs text-[var(--color-ca-text-secondary)] mb-4">All 48 subheadings ranked by emissions.</p>
              {allActivitiesData.length > 0 ? (
                <div style={{ height: Math.max(400, allActivitiesData.length * 35) }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={allActivitiesData} layout="vertical" margin={{ left: 8, right: 16 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#23382D" horizontal={false} />
                      <XAxis type="number" stroke="#A9B8AD" fontSize={12} />
                      <YAxis
                        type="category"
                        dataKey="name"
                        stroke="#A9B8AD"
                        fontSize={11}
                        width={140}
                        tick={{ fill: '#A9B8AD' }}
                      />
                      <Tooltip
                        formatter={(value) => [`${value ?? 0} tCO₂e`, 'Emissions']}
                        contentStyle={{ background: '#18261E', border: '1px solid #23382D', borderRadius: 8, color: '#F2F7F3' }}
                      />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]} background={{ fill: '#23382D' }}>
                        {allActivitiesData.map(entry => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <p className="text-sm text-[var(--color-ca-text-secondary)] py-10 text-center">No activities recorded.</p>
              )}
            </div>
          </div>

          {/* Highest emission activity + comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[var(--color-ca-elevated)] p-5 rounded-xl border border-[#23382D]">
              <h4 className="text-sm font-semibold mb-2">Highest Emission Activity</h4>
              {topItem ? (
                <>
                  <p className="text-lg font-medium text-[var(--color-ca-lime)]">{SUBSECTION_LABEL[topItem.activityId] ?? topItem.activityId}</p>
                  <p className="text-xs text-[var(--color-ca-text-secondary)] mb-2">{CATEGORY_LABEL[topItem.group]}</p>
                  <p className="text-sm text-[var(--color-ca-text-secondary)]">{(topItem.emissionsKg / 1000).toFixed(3)} tCO₂e</p>
                </>
              ) : (
                <p className="text-sm text-[var(--color-ca-text-secondary)]">No activity recorded.</p>
              )}
            </div>
            <div className="bg-[var(--color-ca-elevated)] p-5 rounded-xl border border-[#23382D]">
              <h4 className="text-sm font-semibold mb-2">Comparison</h4>
              <p className="text-sm text-[var(--color-ca-text-secondary)]">{comparison?.text}</p>
            </div>
          </div>

          {/* Recommendations */}
          <div className="mb-8">
            <h3 className="ca-heading-gradient text-lg font-medium mb-4 flex items-center gap-2">
              <Lightbulb size={18} className="text-[var(--color-ca-lime)]" /> Improvement Recommendations
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {recommendations.map((rec, idx) => (
                <div key={idx} className="bg-[var(--color-ca-elevated)] p-5 rounded-xl border border-[var(--color-ca-lime)]/30">
                  <h4 className="font-semibold text-[var(--color-ca-lime)] mb-2">{rec.title}</h4>
                  <p className="text-sm text-[var(--color-ca-text-secondary)] mb-4">{rec.description}</p>
                  {rec.estimatedSavingKg !== undefined && (
                    <div className="inline-block bg-[#23382D] text-xs px-3 py-1.5 rounded-lg">
                      Estimated saving: <span className="font-mono font-bold text-white">{(rec.estimatedSavingKg / 1000).toFixed(3)} tCO₂e</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-[#23382D] no-print text-center">
            <button onClick={() => { restart(); navigate('/'); }} className="inline-flex items-center gap-2 text-sm text-[var(--color-ca-mint)] hover:underline">
              <RotateCcw size={14} /> Start again from scratch
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}