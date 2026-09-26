export interface KBEntry {
  keywords: string[];
  response: string;
}

export const knowledgeBase: KBEntry[] = [
  // ============================================================
  // SMALL TALK / GREETINGS
  // ============================================================
  {
    keywords: [
      'how are you', 'how r u', 'how you doing', 'how you doin',
      "how's it going", 'hows it going', 'how are things',
      'how is it going', 'how is everything', 'how do you feel',
      'you good', 'you ok', 'you okay', 'are you ok', 'are you okay',
      'how have you been', 'how you been',
    ],
    response:
      "Running smoothly, thanks for asking! 🌱 Ready when you are — ask me about the assessment, your report, Carbon Atlas, sustainability, or any carbon concept you're curious about.",
  },
  {
    keywords: ['good morning', 'morning', 'gm', 'top of the morning'],
    response:
      "Good morning! ☀️ Hope it's a productive one. Ask me anything about your carbon assessment, the science behind it, or how to read your report.",
  },
  {
    keywords: ['good afternoon', 'afternoon'],
    response: "Good afternoon! What would you like to know — the assessment, your report, or a sustainability topic?",
  },
  {
    keywords: ['good evening', 'evening'],
    response: "Good evening! Ask me anything about the calculator, your report, or carbon concepts in general.",
  },
  {
    keywords: ['good night', 'goodnight', 'gn'],
    response: "Good night! Come back anytime if you need help with your carbon report. 🌙",
  },
  {
    keywords: [
      'hello', 'hi', 'hey', 'yo', 'hiya', 'sup', 'greetings',
      'hey there', 'hi there', 'hello there', 'heya', 'howdy',
      'whats up', "what's up", 'wassup', 'wazzup', 'wats up',
    ],
    response:
      "Hey there! 👋 I'm the Carbon Atlas assistant. Ask me about the calculator, your report, sustainability, or any carbon-footprint concept — I'm happy to explain the terms too.",
  },
  {
    keywords: [
      'who are you', 'what are you', 'your name', 'what should i call you',
      'whats your name', "what's your name", 'introduce yourself',
      'tell me about yourself', 'who am i talking to', 'who is this',
    ],
    response:
      "I'm the Carbon Atlas assistant — a built-in helper for this site. I can walk you through the assessment, explain what's on your Carbon Report, define the sustainability and greenhouse-gas terms used across the app, and point you to the right page for support, privacy, or terms of service.",
  },
  {
    keywords: [
      'are you a robot', 'are you human', 'are you an ai', 'are you real',
      'are you a bot', 'are you chatgpt', 'are you a person',
      'is this ai', 'is this a bot', 'is this human',
    ],
    response:
      "I'm a rule-based assistant — no generative AI model behind me, just a curated knowledge base built specifically for Carbon Atlas. That means I'm reliable on anything about this tool, but I won't know things outside that scope. 😅",
  },
  {
    keywords: [
      "i'm fine", 'i am fine', 'im fine', "i'm good", 'i am good', 'im good',
      'doing well', 'doing great', 'doing good', 'doing okay', 'doing ok',
      'not bad', 'pretty good', 'all good', 'im ok', "i'm ok", 'i am ok',
    ],
    response: "Glad to hear it! Let's get into it — what would you like to know?",
  },
  {
    keywords: [
      'nice', 'cool', 'awesome', 'great', 'perfect', 'excellent',
      'amazing', 'wonderful', 'sweet', 'fantastic', 'brilliant',
      'lovely', 'neat', 'dope', 'sick', 'fire', 'lit', 'beautiful',
    ],
    response: "🙌 Anything else you'd like to explore — your report, a term, or a sustainability question?",
  },
  {
    keywords: [
      'ok', 'okay', 'alright', 'got it', 'i see', 'understood',
      'sure', 'k', 'kk', 'fine', 'noted', 'makes sense', 'i understand',
      'aha', 'ohh', 'oh', 'hm', 'hmm', 'hmmm',
    ],
    response: "👍 Let me know if you need anything else.",
  },
  {
    keywords: [
      'thank you', 'thanks', 'cheers', 'appreciate', 'thx', 'ty',
      'thanks a lot', 'thank u', 'many thanks', 'much appreciated',
    ],
    response: "You're welcome — good luck with your assessment, and thank you for taking the time to measure your footprint! 🌱",
  },
  {
    keywords: [
      'bye', 'goodbye', 'see you', 'see ya', 'later', 'cya',
      'catch you later', 'talk later', 'farewell', 'i am leaving',
      "i'm leaving", 'gtg', 'got to go',
    ],
    response: "See you! Come back anytime you need help reading a report or reducing your footprint. 👋",
  },
  {
    keywords: [
      'sorry', 'my bad', 'apologies', 'apologize', 'apologise',
      'excuse me', 'pardon',
    ],
    response: "No worries at all! What would you like to ask?",
  },
  {
    keywords: [
      'love you', 'i like you', 'you are the best', 'youre the best',
      "you're the best", 'you are amazing', 'you rock', 'youre awesome',
      "you're awesome", 'best bot', 'good bot',
    ],
    response: "Aw, thank you! 🌿 Now let's save the planet one carbon report at a time.",
  },
  {
    keywords: [
      'tell me a joke', 'joke', 'make me laugh', 'funny', 'something funny',
      'say something funny', 'make me smile',
    ],
    response:
      "Why did the carbon atom break up with the oxygen atom? Because it needed some space. 🌌 (Ok, I'll stick to carbon footprints — got a real question for me?)",
  },
  {
    keywords: [
      'what can you do', 'what can i ask', 'help me', 'i need help',
      'what do you know', 'what topics', 'what questions', 'your skills',
      'what are you capable of', 'capabilities',
    ],
    response:
      "I can help with a lot: starting the assessment, reading your Carbon Report, what tCO₂e and emission factors mean, direct vs indirect (Scope 1/2) emissions, your recommendations and action plan, printing your report, restarting, the six assessment categories, why carbon footprints matter, sustainability basics, and where to find support, privacy, and terms pages. Just ask naturally — I'm flexible with phrasing!",
  },

  // ============================================================
  // WHAT IS CARBON ATLAS / ABOUT
  // ============================================================
  {
    keywords: [
      'who made', 'who built', 'who created', 'who developed',
      'who designed', 'about this', 'about the app', 'about the site',
      'about this app', 'about this site', 'about the project',
      'about carbon atlas', 'what is carbon atlas', 'what is this app',
      'what is this site', 'what is this tool', 'creator', 'developer',
      'built', 'made this',
    ],
    response:
      "Carbon Atlas is a carbon-footprint calculator built for a manufacturing operation to measure, understand, and act on its greenhouse gas emissions. It walks you through six activity categories, calculates your total footprint in tCO₂e using region-specific emission factors, and generates a full report with charts, comparisons, and a tailored action plan. It's a React + TypeScript app built with Vite, Tailwind CSS, GSAP, and Recharts.",
  },
  {
    keywords: [
      'why this calculator', 'why use this', 'why this tool', 'why carbon atlas',
      'why should i use this', 'what is the point of this', 'purpose of this tool',
      'why did you build this', 'why does this exist', 'point of carbon atlas',
    ],
    response:
      "Most factories know their electricity bill and fuel spend, but not their actual greenhouse-gas footprint — the two aren't the same thing once you account for methane, refrigerant leaks, and process emissions. Carbon Atlas exists to translate everyday operational data (litres of diesel, kWh of electricity, kg of refrigerant) into one comparable number — tCO₂e — so a factory can see where its emissions actually come from, benchmark categories against each other, and get a concrete action plan instead of a vague 'go green' suggestion.",
  },
  {
    keywords: [
      'why is reducing carbon important', 'why reduce carbon', 'why reduce emissions',
      'why does carbon footprint matter', 'why measure carbon footprint',
      'why is this necessary', 'why should i care', 'why does it matter',
      'importance of reducing emissions', 'why lower emissions',
      'why cut carbon', 'why is carbon footprint important',
    ],
    response:
      "Reducing your carbon footprint matters for a few very practical reasons, not just the planet in the abstract. First, the climate case: greenhouse gases trap heat in the atmosphere, and the buildup from industrial activity since the 1800s is driving measurable warming, more extreme weather, and rising seas — all of which disrupt supply chains and raw-material availability. Second, the business case: international buyers (especially in garment and textile exporting) increasingly require emissions disclosure as part of sourcing decisions, and regulations like the EU's Carbon Border Adjustment Mechanism are starting to price imported carbon directly. Third, the cost case: most of the actions that cut emissions — fixing leaks, insulating steam lines, upgrading motors — also cut your fuel and electricity bills. Measuring first is what makes all three of those manageable instead of guesswork.",
  },
  {
    keywords: [
      'what is sustainability', 'define sustainability', 'sustainability meaning',
      'explain sustainability', 'what does sustainability mean',
    ],
    response:
      "Sustainability means meeting today's operational and business needs without compromising the resources, environment, or stability that future operations (and future generations) will depend on. In an industrial context it usually spans three linked areas — environmental (emissions, water, waste), social (worker welfare, community impact), and economic (long-term viability, cost efficiency). Carbon Atlas focuses specifically on the environmental, emissions side of that picture.",
  },
  {
    keywords: [
      'climate change', 'global warming', 'what is climate change',
      'what is global warming', 'explain climate change', 'explain global warming',
      'why is the planet warming', 'why is earth getting hotter',
    ],
    response:
      "Climate change refers to long-term shifts in temperature and weather patterns, largely driven since the industrial era by human activity — chiefly the burning of fossil fuels, which releases greenhouse gases like CO₂ and methane into the atmosphere. Global warming is the specific trend of rising average global temperatures that results. These gases trap heat that would otherwise radiate back into space (the 'greenhouse effect'), and the more of them accumulate, the more heat gets trapped. That's the mechanism this calculator is ultimately measuring a company's contribution to.",
  },
  {
    keywords: [
      'greenhouse effect', 'greenhouse gas', 'greenhouse gases', 'what is ghg',
      'ghg', 'what is a greenhouse gas', 'explain greenhouse effect',
    ],
    response:
      "The greenhouse effect is the process by which certain atmospheric gases — carbon dioxide (CO₂), methane (CH₄), nitrous oxide (N₂O), and fluorinated gases like refrigerants (HFCs) — trap heat radiating from the Earth's surface, keeping the planet warmer than it would otherwise be. In moderation this is what makes Earth habitable at all; the problem is that industrial activity has sharply increased the concentration of these gases, trapping more heat than the climate system is adapted to. All six of the emission sources tracked in this assessment (fuel combustion, vehicles, fugitive gases, production processes, purchased electricity, and purchased energy) ultimately release one or more of these gases.",
  },
  {
    keywords: [
      'ghg protocol', 'greenhouse gas protocol', 'what is the ghg protocol',
      'carbon accounting standard', 'emissions accounting standard',
    ],
    response:
      "The GHG Protocol is the most widely used international standard for how organizations should measure and report greenhouse gas emissions. It splits emissions into Scope 1 (direct — sources you own or control), Scope 2 (indirect — purchased electricity, steam, heat, cooling), and Scope 3 (all other indirect emissions across your value chain, like supply chain and product use). Carbon Atlas's six categories map onto Scope 1 (fuel combustion, vehicles, fugitive gases, production activities) and Scope 2 (purchased electricity, purchased energy) — Scope 3 isn't currently covered in this assessment.",
  },
  {
    keywords: [
      'iso 14064', 'iso 14001', 'iso 50001', 'carbon standard', 'ghg standard',
      'certification standard for emissions',
    ],
    response:
      "ISO 14064 is the international standard specifically for quantifying and reporting greenhouse gas emissions and removals — it's the standard a certified auditor would use to formally verify a report like the one this tool produces. ISO 14001 (environmental management systems) and ISO 50001 (energy management systems) are broader operational standards many factories pursue alongside emissions reporting. This calculator gives you a solid working estimate, but formal certification under any of these requires third-party verification beyond what this tool provides.",
  },
  {
    keywords: [
      'paris agreement', 'what is the paris agreement', 'paris climate accord',
    ],
    response:
      "The Paris Agreement is the 2015 international treaty under which nearly 200 countries committed to limiting global warming to well below 2°C above pre-industrial levels, ideally to 1.5°C. It's the reason most national climate policies, corporate net-zero pledges, and buyer sustainability requirements exist in their current form — the targets your buyers or regulators may be asking you to align with usually trace back to this agreement.",
  },
  {
    keywords: [
      'ipcc', 'what is the ipcc', 'intergovernmental panel on climate change',
    ],
    response:
      "The IPCC (Intergovernmental Panel on Climate Change) is the United Nations body that periodically assesses the global scientific evidence on climate change and publishes consensus reports used to inform international policy — including the emission factor science and global warming potentials that tools like this one rely on.",
  },
  {
    keywords: [
      'sdg', 'sdgs', 'sustainable development goals', 'un goals',
    ],
    response:
      "The Sustainable Development Goals (SDGs) are 17 targets adopted by the United Nations in 2015 covering everything from poverty to climate action. Reducing your carbon footprint contributes most directly to SDG 13 (Climate Action), but efficiency measures like the ones in your action plan often also support SDG 7 (Affordable and Clean Energy) and SDG 12 (Responsible Consumption and Production) — useful framing if you report against SDGs for buyers or investors.",
  },
  {
    keywords: [
      'esg', 'what is esg', 'esg reporting', 'environmental social governance',
    ],
    response:
      "ESG stands for Environmental, Social, and Governance — a framework investors and buyers use to assess a company's non-financial risk and performance. Your carbon footprint sits squarely in the 'E' pillar. A Carbon Atlas report gives you a concrete, quantified starting point for the emissions section of an ESG disclosure, though full ESG reporting also covers social factors (labour practices, safety) and governance factors (board oversight, ethics) that this tool doesn't measure.",
  },
  {
    keywords: [
      'csr', 'corporate social responsibility', 'what is csr',
    ],
    response:
      "CSR (Corporate Social Responsibility) refers to a company's voluntary commitments and activities beyond legal compliance — community programs, ethical sourcing, and environmental stewardship among them. Cutting your measured carbon footprint is one of the most concrete, verifiable things a CSR program can point to, since — unlike many CSR activities — it's backed by an actual number you can track year over year.",
  },
  {
    keywords: [
      'cbam', 'carbon border adjustment', 'eu carbon border', 'carbon tariff',
      'carbon border tax',
    ],
    response:
      "The Carbon Border Adjustment Mechanism (CBAM) is an EU policy that puts a carbon price on certain imported goods based on the emissions generated in producing them, to prevent companies from relocating production to avoid climate rules. It's currently focused on a specific set of high-emission sectors, but the broader trend — buyers and regulators wanting verifiable emissions data attached to products — is exactly why manufacturers are increasingly expected to produce a report like the one this tool generates.",
  },
  {
    keywords: [
      'carbon tax', 'what is a carbon tax', 'carbon pricing',
    ],
    response:
      "A carbon tax is a fee governments charge per tonne of CO₂e emitted, intended to make the cost of emissions visible in day-to-day business decisions rather than treating the atmosphere as free to pollute. Bangladesh does not currently operate a domestic carbon tax, but many of your export buyers operate in jurisdictions that do (or that are moving toward carbon border pricing), which is one more reason to have a defensible emissions baseline ready.",
  },
  {
    keywords: [
      'higg index', 'bluesign', 'gots certification', 'buyer sustainability requirement',
      'brand sustainability requirement', 'audit requirement buyer',
    ],
    response:
      "Many international apparel brands require suppliers to report through frameworks like the Higg Index (Facility Environmental Module), Bluesign, or GOTS as a condition of sourcing. All of these ask for exactly the kind of activity data this assessment collects — fuel, electricity, refrigerant, and process-emissions figures — so a completed Carbon Atlas report is a strong starting point for those disclosures, though you should always follow the specific data format each framework requires.",
  },
  {
    keywords: [
      'net zero', 'carbon neutral', 'what is net zero', 'what is carbon neutral',
      'difference between net zero and carbon neutral',
    ],
    response:
      "Carbon neutral means your net carbon emissions equal zero, usually achieved by measuring your footprint and then purchasing enough carbon offsets to balance it out. Net zero is a stricter, longer-term goal: cutting real emissions as close to zero as physically possible first (through efficiency, electrification, renewables), and only using offsets for the small residual that can't be eliminated. A Carbon Atlas report is the essential first step for either path — you can't credibly claim either without a measured baseline.",
  },
  {
    keywords: [
      'carbon offset', 'what is a carbon offset', 'offset', 'offsetting',
      'carbon offsetting',
    ],
    response:
      "A carbon offset is a credit representing one tonne of CO₂e either removed from the atmosphere (e.g., reforestation) or prevented from being emitted elsewhere (e.g., funding a renewable energy project), which a company purchases to compensate for its own emissions. Offsets are best treated as a last resort for unavoidable emissions — the recommendations in your Carbon Report focus on direct reduction first, since eliminating your own emissions is generally cheaper and more defensible than buying offsets for them.",
  },
  {
    keywords: [
      'carbon credit', 'what is a carbon credit', 'carbon credits',
    ],
    response:
      "A carbon credit is a tradable certificate representing the right to emit, or the verified reduction of, one tonne of CO₂e. Companies that reduce emissions below a regulatory cap can sometimes sell surplus credits; companies over their target buy credits to comply. This tool doesn't generate or trade credits — it measures your baseline footprint, which is the prerequisite for participating in any carbon credit or trading scheme.",
  },
  {
    keywords: [
      'circular economy', 'what is circular economy',
    ],
    response:
      "A circular economy is a production model that keeps materials in use for as long as possible — through reuse, repair, and recycling — instead of the traditional 'take, make, dispose' linear model. In a garment factory context this shows up as fabric-waste recycling, water reuse, and equipment refurbishment rather than replacement, all of which typically also reduce the process and utility emissions this tool measures.",
  },

  // ============================================================
  // STARTING THE ASSESSMENT
  // ============================================================
  {
    keywords: [
      'how do i start', 'how to start', 'how do we start', 'where do i start',
      'how do i begin', 'how to begin', 'get started', 'getting started',
      'how to use', 'how do i use', 'how does this work', 'how does it work',
      'start the assessment', 'start assessment', 'begin the assessment',
      'begin assessment', 'take the assessment', 'do the assessment',
      'take the test', 'start the test', 'begin the test',
      'first step', 'what do i do first', 'what should i do first',
    ],
    response:
      "Easy — hit the 'Start Assessment' button on the home page. You'll work through six short categories (fuel & stationary combustion, mobile combustion/vehicles, fugitive emissions/gas leakage, process emissions/production, purchased electricity, and purchased steam/heat/cooling). Enter your monthly or annual usage figures for whichever activities apply to your facility — you can skip anything that doesn't apply. It takes about 5–10 minutes, and you'll land straight on your Carbon Report at the end.",
  },
  {
    keywords: [
      'how long does it take', 'how much time', 'how long will it take',
      'time to complete', 'duration of assessment',
    ],
    response:
      "Most people complete the full six-category assessment in 5–10 minutes, assuming you already know (or can quickly look up) your monthly fuel, electricity, and refrigerant usage figures. You can leave any activity blank if it doesn't apply to your facility.",
  },
  {
    keywords: [
      'do i need an account', 'sign up', 'login', 'log in', 'create account',
      'need to register', 'is registration required',
    ],
    response:
      "No account needed — the assessment runs entirely in your browser. Just click 'Start Assessment' and go straight into the questions.",
  },
  {
    keywords: [
      'monthly or annual', 'reporting period', 'what period', 'which period',
      'monthly vs annual', 'time period', 'annual data', 'monthly data',
    ],
    response:
      "You can report on either a monthly or annual reporting period — pick whichever matches the data you have on hand. Keep it consistent across categories in a single assessment, since your report's totals and comparisons are only meaningful when every input covers the same period.",
  },

  // ============================================================
  // CARBON REPORT
  // ============================================================
  {
    keywords: [
      'carbon report', 'my report', 'the report', 'view report', 'see report',
      'see my report', 'view my report', 'show report', 'show my report',
      'open report', 'open my report', 'where is my report',
      'where is the report', 'what is the report', 'results page',
      'show results', 'see results', 'my results', 'my footprint',
      'my carbon footprint', 'my emissions', 'my total',
    ],
    response:
      "Your Carbon Report is the final screen you land on after the assessment. It shows your total emissions in tCO₂e, a pie chart and detailed breakdown by category, a direct vs indirect emissions split, a bar chart ranking all 48 tracked activities, your single highest-emitting activity, a comparison between your top two sources, a 5-point Recommended Action Plan tailored to your exact answers, Improvement Recommendations with estimated savings, a glossary of key terms, and important notes and assumptions. You can print it, edit your answers, or start over — all from that same page.",
  },
  {
    keywords: [
      'total carbon footprint', 'total emissions', 'total tco2e', 'what is my total',
    ],
    response:
      "Your total carbon footprint is shown at the top of the report in tonnes of CO₂ equivalent (tCO₂e) — the sum of every emission source you entered across all six categories, converted to a single comparable unit for the reporting period you selected.",
  },

  // ============================================================
  // tCO2e
  // ============================================================
  {
    keywords: [
      'tco2e', 'tco2', 'co2e', 'co2 equivalent', 'carbon equivalent',
      'what is tco2e', 'what does tco2e mean', 'what does co2e mean',
      'what is the unit', 'what unit', 'what measurement',
      'unit of measurement', 'how is it measured', 'how do you measure',
      'what does the number mean', 'what does it mean',
    ],
    response:
      "tCO₂e = 'tonnes of CO₂ equivalent'. It's the standard unit for carbon footprints — it converts different greenhouse gases (methane, nitrous oxide, refrigerants, etc.) into the equivalent warming impact of CO₂, using each gas's Global Warming Potential, so wildly different emission sources can be added together into one comparable number.",
  },
  {
    keywords: [
      'global warming potential', 'gwp', 'what is gwp', 'why is methane worse',
      'why does methane count more',
    ],
    response:
      "Global Warming Potential (GWP) measures how much heat a given greenhouse gas traps in the atmosphere relative to the same mass of CO₂ over a set time horizon (usually 100 years). CO₂ has a GWP of 1 by definition. Methane's GWP is roughly 28-36, meaning 1 kg of methane traps as much heat as 28-36 kg of CO₂ — which is exactly why the wastewater and fugitive-emissions categories in this tool can show a large tCO₂e impact from what looks like a small physical quantity of gas.",
  },

  // ============================================================
  // DIRECT EMISSIONS / SCOPE 1
  // ============================================================
  {
    keywords: [
      'direct emissions', 'direct emission', 'what are direct',
      'what is direct', 'scope 1', 'scope one',
      'emissions i own', 'emissions we own', 'emissions i control',
    ],
    response:
      "Direct emissions (Scope 1 in GHG Protocol terms) come from sources your business owns or controls — in this tool that's fuel combustion (boilers, generators, heaters), vehicle operations, fugitive gas leakage (refrigerants), and production/process activities. These are the emissions most directly within your control to reduce, which is why most of the Recommended Action Plan focuses here.",
  },

  // ============================================================
  // INDIRECT EMISSIONS / SCOPE 2 & 3
  // ============================================================
  {
    keywords: [
      'indirect emissions', 'indirect emission', 'what are indirect',
      'what is indirect', 'scope 2', 'scope two',
      'purchased electricity', 'purchased energy',
    ],
    response:
      "Indirect emissions happen because of your business but occur at sources owned by someone else — the classic example is a power station burning fuel to generate the electricity you buy. Here that means purchased electricity/utilities and purchased steam, heat, and cooling. Reducing these usually means using less of the purchased resource (efficiency) or sourcing it from a lower-carbon supplier (renewables, cleaner grid mix).",
  },
  {
    keywords: [
      'scope 3', 'scope three', 'value chain emissions', 'supply chain emissions',
      'does this cover scope 3', 'upstream emissions', 'downstream emissions',
    ],
    response:
      "Scope 3 covers all other indirect emissions across your value chain — things like purchased raw materials, employee commuting, business travel, waste disposal, and how customers use or dispose of your product. This assessment currently focuses on Scope 1 and Scope 2 (your direct operations and purchased energy); Scope 3 isn't part of the six categories tracked here, so if a buyer requires full value-chain reporting you'll need it as a separate exercise.",
  },

  // ============================================================
  // DEMO MODE
  // ============================================================
  {
    keywords: [
      'demo', 'demo data', 'demo mode', 'example', 'try example',
      'try an example', 'sample', 'sample data', 'test data',
      'fake data', 'dummy data', 'see an example', 'show example',
      'what is demo', 'what is the example',
    ],
    response:
      "Click 'Try an example' on the home page — it loads realistic sample data modeled on a garment manufacturer (referred to as Bitopi Group in the demo) so you can explore a full report instantly. It's clearly marked as demonstration data throughout the report, so don't submit it as real results — use it to see what the tool produces before entering your own figures.",
  },
  {
    keywords: [
      'bitopi', 'bitopi group', 'who is bitopi', 'what is bitopi',
    ],
    response:
      "'Bitopi Group' is the sample company name used for the demo dataset — a representative garment manufacturing operation used purely to show realistic example numbers throughout the assessment and report. It's not a real client; when you see 'Used Bitopi Group's emission factors' on a report, that report was generated from demo data, not a live submission.",
  },

  // ============================================================
  // PRINT / PDF
  // ============================================================
  {
    keywords: [
      'print', 'printing', 'pdf', 'save as pdf', 'save pdf',
      'export pdf', 'export', 'download', 'download pdf',
      'how do i print', 'how to print', 'how do i save', 'how to save',
      'save report', 'save my report', 'print report', 'print my report',
      'generate pdf', 'make a pdf',
    ],
    response:
      "On the report page, click 'Print / Save as PDF'. Your browser's print dialog opens — pick 'Save as PDF' as the destination to download a clean copy, ready to share with management, auditors, or buyers.",
  },

  // ============================================================
  // RECOMMENDATIONS / ACTION PLAN
  // ============================================================
  {
    keywords: [
      'recommend', 'recommendation', 'recommendations', 'improve',
      'improvement', 'reduce', 'reducing', 'lower', 'cut emission',
      'cut emissions', 'reduce my emissions', 'how to reduce',
      'how can i reduce', 'how do i reduce', 'reduce footprint',
      'how to improve', 'tips', 'advice', 'suggestions',
    ],
    response:
      "Your report has two things to look at: 'Improvement Recommendations', which targets your single largest emission category with an estimated saving, and the 'Recommended Action Plan', which lists 5 concrete, real-world actions specific to your actual reported activities — ranked by how much each one contributes to your total footprint, with a realistic impact range for each intervention (not a fixed number, since the right fix and its potential saving genuinely differ between, say, a leaking chiller and an oversized boiler).",
  },
  {
    keywords: [
      'action plan', 'actions', 'next steps', 'what can i do',
      'recommended action plan',
    ],
    response:
      "The Recommended Action Plan is the 5-item checklist on your Carbon Report, built directly from your specific answers. It ranks your actual reported activities by emissions, names a concrete intervention for each one (from boiler tuning to LED retrofits to refrigerant leak repair), and gives you a realistic improvement range for that specific action along with what share of your total footprint it represents — so it's tailored to you, not a generic checklist.",
  },
  {
    keywords: [
      'estimated saving', 'estimated savings', 'potential saving', 'how much can i save',
      'saving calculation', 'how are savings calculated',
    ],
    response:
      "The estimated saving shown under Improvement Recommendations models a targeted reduction in your single largest emission category and re-runs the calculation to show the resulting drop in tCO₂e. The Recommended Action Plan instead gives a realistic percentage range per specific intervention (e.g., LED retrofits typically cut lighting electricity by 40-60%), since different fixes have genuinely different achievable impact.",
  },
  {
    keywords: [
      'energy audit', 'what is an energy audit', 'why energy audit',
    ],
    response:
      "An energy audit is a systematic walk-through of your facility's fuel and electricity-consuming equipment to identify where energy (and money) is being wasted — think steam leaks, over-lit warehouses, oversized compressors, or poorly maintained boilers. It's usually the single highest-value first step for a factory that hasn't formally reviewed its energy use before, which is why it appears as a starting recommendation when an assessment reports relatively few activities.",
  },
  {
    keywords: [
      'ldar', 'leak detection and repair', 'what is ldar',
    ],
    response:
      "LDAR (Leak Detection and Repair) is a maintenance program that systematically finds and fixes leaks in pressurized systems — refrigerant lines, compressed air networks, steam piping — rather than waiting for equipment to fail outright. It's consistently one of the fastest-payback interventions in a factory, since the leaked gas or air was something you already paid to produce.",
  },
  {
    keywords: [
      'rooftop solar', 'solar panels', 'solar feasibility', 'renewable energy',
      'switch to renewable', 'go solar',
    ],
    response:
      "Rooftop solar reduces how much grid electricity (and its associated indirect emissions) your facility needs to buy. Whether it's worthwhile depends on your available roof area, your daytime load profile (solar generates only when the sun is up, which suits factories running day shifts well), and local incentives or net-metering arrangements — a feasibility study from a qualified installer is the right next step once your assessment shows purchased electricity as a significant contributor.",
  },
  {
    keywords: [
      'wastewater methane', 'wastewater treatment recommendation', 'capture methane',
      'biogas', 'flare methane', 'methane capture',
    ],
    response:
      "Anaerobic wastewater treatment naturally generates methane as organic matter breaks down without oxygen. If that methane simply vents to atmosphere, it counts at a much higher tCO₂e impact than if it's captured and either flared (burned off, converting it to less-potent CO₂) or used as biogas for energy generation. Covering your treatment tanks/lagoons and adding a flare or biogas line is usually the single most impactful action available for factories with significant wastewater emissions.",
  },

  // ============================================================
  // EMISSION FACTOR
  // ============================================================
  {
    keywords: [
      'emission factor', 'emission factors', 'factor', 'factors',
      'what is an emission factor', 'what are emission factors',
      'where do numbers come from', 'where do the numbers come from',
      'how are emissions calculated', 'how do you calculate',
      'calculation method', 'methodology',
    ],
    response:
      "An emission factor converts a physical activity quantity (like 1 litre of diesel, or 1 kWh of electricity) into the amount of CO₂e it produces. This tool multiplies each answer you give by the matching emission factor for that activity and unit, then sums everything into your total. It uses region-specific factors for Bangladesh where available, since grid electricity carbon intensity and fuel quality vary meaningfully by country.",
  },

  // ============================================================
  // FUGITIVE / LEAKS
  // ============================================================
  {
    keywords: [
      'fugitive', 'fugitive emission', 'fugitive emissions',
      'refrigerant', 'refrigerants', 'refrigerant leak', 'leak', 'leaks',
      'leakage', 'gas leak', 'gas leakage', 'hvac leak', 'ac leak',
    ],
    response:
      "Fugitive emissions are gases that escape unintentionally from pressurized equipment — the classic example being refrigerant (HFC) leaks from air conditioning, chillers, and refrigeration units. They're tracked under the 'Fugitive Emissions' category here, and because refrigerants often carry a very high Global Warming Potential, even small leaked quantities can register a disproportionately large tCO₂e impact.",
  },
  {
    keywords: [
      'stationary combustion', 'what is stationary combustion',
    ],
    response:
      "Stationary combustion means burning fuel in fixed, non-moving equipment — boilers, gas generators, thermal oil heaters, and industrial heating systems. It's tracked in the 'Stationary Combustion' category and is typically one of the largest contributors for factories running gas-fired boilers or diesel backup generators.",
  },
  {
    keywords: [
      'mobile combustion', 'what is mobile combustion',
    ],
    response:
      "Mobile combustion means burning fuel in vehicles and mobile equipment — employee transport buses, company cars, delivery vehicles, and forklifts. It's tracked under 'Mobile Combustion' (Vehicle Operations) in this assessment.",
  },
  {
    keywords: [
      'process emissions', 'what are process emissions', 'production emissions',
    ],
    response:
      "Process emissions come directly from manufacturing activities themselves rather than from burning fuel for energy — for a garment factory that includes textile/fabric treatment, chemical processing, washing and finishing operations, and wastewater treatment (which generates methane and nitrous oxide as organic matter breaks down). These are tracked under 'Process Emissions' (Production Activities).",
  },

  // ============================================================
  // BANGLADESH / REGION
  // ============================================================
  {
    keywords: [
      'bangladesh', 'region', 'regional', 'country', 'location',
      'what region', 'which country', 'which region',
      'where are factors from', 'where do factors come from',
    ],
    response:
      "Yes — emission factors here are region-specific to Bangladesh where possible, including the grid electricity emission factor, since Bangladesh's national grid carbon intensity differs from other countries' grids. Results are still estimates though, so get them verified by a certified auditor before any official or buyer-facing submission.",
  },
  {
    keywords: [
      'rmg sector', 'garment industry', 'ready made garment', 'apparel industry',
      'textile industry sustainability', 'garment factory sustainability',
    ],
    response:
      "Bangladesh's ready-made garment (RMG) sector is one of the world's largest apparel exporters, and international buyers increasingly tie sourcing decisions to verified sustainability performance — energy efficiency, water use, and greenhouse gas emissions among them. This tool's six categories (boilers, generators, sewing-floor electricity, refrigerant leaks, wet-processing emissions, and purchased steam/heat/cooling) are modeled specifically on a typical garment factory's emission sources, which is why the demo data and default question wording reference garment operations directly.",
  },

  // ============================================================
  // CHARTS & REPORT SECTIONS
  // ============================================================
  {
    keywords: [
      'chart', 'charts', 'pie chart', 'bar chart', 'graph', 'graphs',
      'visual', 'visuals', 'visualization', 'diagram',
      'what are the charts', 'explain the chart', 'explain the charts',
      'what do the charts show', 'pie', 'bar',
    ],
    response:
      "You'll see two charts on the report: a pie chart showing contribution by category (with a detailed breakdown list underneath, including tonnage and percentage per category), and a horizontal bar chart ranking all 48 tracked subheadings by emissions from highest to lowest. Hover over any slice or bar for exact tCO₂e values.",
  },
  {
    keywords: [
      'highest emission activity', 'top emitter', 'biggest source', 'largest source',
      'what is my biggest emission source',
    ],
    response:
      "The 'Highest Emission Activity' box on your report names the single specific activity (out of all 48 tracked subheadings) responsible for the most emissions in your assessment, along with which category it belongs to and its exact tCO₂e value — it's usually the natural starting point for your first reduction effort.",
  },
  {
    keywords: [
      'comparison box', 'what is the comparison', 'comparison section',
      'explain the comparison',
    ],
    response:
      "The 'Comparison' box compares your top two emission categories directly — for example, telling you your electricity-related emissions are 2.3x greater than your next largest source, fuel combustion. It's there to make relative scale obvious at a glance, without you having to read every percentage in the breakdown list yourself.",
  },
  {
    keywords: [
      'direct vs indirect chart', 'emissions breakdown', 'direct indirect split',
      'direct vs indirect emissions percentage',
    ],
    response:
      "The 'Emissions Breakdown' section splits your total footprint into Direct Emissions (fuel combustion, vehicles, fugitive gases, and production/process activities — sources you own or control) and Indirect Emissions (purchased electricity, steam, heat, and cooling — sources owned by someone else but tied to your operations), each shown as a tonnage and a percentage bar.",
  },
  {
    keywords: [
      'glossary', 'key terms', 'terms used', 'terminology', 'glossary of terms',
      'what do the terms mean',
    ],
    response:
      "The 'Glossary of Key Terms' section at the bottom-left of your report defines tCO₂e, Emission Factor, Direct Emissions, Indirect Emissions, and Fugitive Emissions in plain language — everything you need to read the rest of the report without a background in carbon accounting. I can also define any of these (or related terms like GWP, Scope 3, or carbon offset) directly in this chat.",
  },
  {
    keywords: [
      'assumptions', 'notes', 'important notes', 'limitations', 'accuracy',
      'how accurate', 'is this accurate', 'disclaimer',
    ],
    response:
      "The 'Important Notes & Assumptions' section spells out the report's limitations: it's generated from the data you provided, uses region-specific (Bangladesh) factors where applicable, and the results are estimates that should be verified by a certified auditor before official submission. It also lists what's excluded — employee commuting, upstream/downstream supply chain, and waste disposal outside of wastewater treatment (all Scope 3 items not currently covered).",
  },
  {
    keywords: [
      'why is my footprint zero', 'zero emissions', 'footprint is 0', 'total is zero',
      'no emissions recorded',
    ],
    response:
      "A zero total usually means no activity values were entered, or every value entered was zero. Double check that you filled in figures for at least the categories that actually apply to your facility — you can click 'Edit answers' from the report page to go back through the assessment with your previous answers pre-filled.",
  },

  // ============================================================
  // UNITS
  // ============================================================
  {
    keywords: [
      'units', 'what units', 'which units', 'kwh', 'cubic meters', 'm3',
      'litres', 'liters', 'gj', 'kg refrigerant', 'what unit do i use',
    ],
    response:
      "Each question specifies its own unit — cubic metres (m³) for natural gas, litres for diesel and other liquid fuels, kilowatt-hours (kWh) for electricity, kilograms (kg) for refrigerant leakage and wastewater gases, and gigajoules (GJ) for purchased steam, heat, and cooling. Enter the figure in the unit shown next to each question; the tool handles the conversion into a common tCO₂e basis internally.",
  },

  // ============================================================
  // EDIT ANSWERS
  // ============================================================
  {
    keywords: [
      'edit answers', 'edit answer', 'edit my answers', 'change answers',
      'change answer', 'change my answers', 'update answers',
      'update answer', 'go back', 'back', 'modify', 'fix answers',
      'mistake', 'i made a mistake', 'wrong answer', 'correct answers',
      'revise',
    ],
    response:
      "Click 'Edit answers' on the report page — it takes you back through the assessment with your previous answers already filled in, so you only need to correct the figures that were wrong.",
  },

  // ============================================================
  // RESTART / RESET
  // ============================================================
  {
    keywords: [
      'restart', 'reset', 'start over', 'start again', 'start from scratch',
      'clear answers', 'clear my answers', 'clear data', 'delete answers',
      'wipe answers', 'begin again', 'do over', 'fresh start',
      'restart assessment', 'reset assessment',
    ],
    response:
      "At the bottom of the report, click 'Start again from scratch'. That wipes your answers and drops you back on the home page, ready for a fresh assessment.",
  },
  {
    keywords: [
      'how often should i redo this', 'redo assessment', 'how often assess',
      'reassessment frequency', 'update my report',
    ],
    response:
      "Most factories re-run this assessment monthly or quarterly to track a trend rather than a single snapshot — a single report tells you where you stand today; a series of them, using the same reporting period each time, tells you whether your action plan is actually working.",
  },

  // ============================================================
  // CATEGORIES / SIX AREAS
  // ============================================================
  {
    keywords: [
      'categories', 'sections', 'the six', 'six categories', 'six areas',
      'what categories', 'which categories', 'what areas', 'which areas',
      'what does it cover', 'what is covered', 'scope',
      'what will i be asked', 'what questions',
    ],
    response:
      "The assessment covers six areas: Stationary Combustion (boilers, generators, heaters), Mobile Combustion (company vehicles, buses, forklifts), Fugitive Emissions (refrigerant/gas leakage from AC, chillers, fire suppression), Process Emissions (textile/fabric treatment, chemical processing, wastewater treatment), Purchased Electricity (sewing machines, cutting machines, lighting, HVAC, office equipment), and Purchased Steam/Heat/Cooling (external steam, heat, and cooling supply). Each category has several specific questions about your usage.",
  },

  // ============================================================
  // CONTACT / SUPPORT
  // ============================================================
  {
    keywords: [
      'contact', 'contact support', 'support', 'help page',
      'get in touch', 'reach out', 'phone',
      'complaint', 'feedback', 'report a bug', 'bug', 'issue',
    ],
    response:
      "There's a Contact Support page linked in the footer with our email, phone, and office details. You can reach the team directly at rafiulmicrosoft2025@gmail.com for feedback, bug reports, or any questions about the project.",
  },
  {
    keywords: [
      'email', 'email address', 'what is your email', 'contact email',
      'support email', 'send an email',
    ],
    response:
      "You can reach the team at rafiulmicrosoft2025@gmail.com — it's also listed on the Contact Support page, linked in the footer.",
  },

  // ============================================================
  // PRIVACY / TERMS
  // ============================================================
  {
    keywords: [
      'privacy', 'privacy policy', 'data policy', 'my data',
      'is my data safe', 'do you store data', 'data storage', 'gdpr',
    ],
    response:
      "There's a Privacy Policy page linked in the footer with full details. In short: the assessment runs entirely in your browser — your answers aren't uploaded to a server or shared anywhere unless you explicitly choose to save or export them (e.g., printing to PDF and sending it yourself).",
  },
  {
    keywords: [
      'terms', 'terms of service', 'tos', 'legal', 'license',
    ],
    response:
      "There's a Terms of Service page linked in the footer covering acceptable use and the legal basis for the site. Worth a read if you're using report outputs for any formal or buyer-facing submission.",
  },

  // ============================================================
  // MISC PRODUCT / SUPPORT
  // ============================================================
  {
    keywords: [
      'is it free', 'cost', 'pricing', 'how much does it cost', 'do i have to pay',
      'is there a fee',
    ],
    response:
      "Carbon Atlas is free to use — there's no account, no paywall, and no fee to run the assessment or generate your report.",
  },
  {
    keywords: [
      'mobile', 'phone browser', 'does this work on mobile', 'is it responsive',
      'can i use this on my phone',
    ],
    response:
      "Yes — the site is built responsively and works on both desktop and mobile browsers, though for entering a lot of figures in one sitting a laptop or desktop screen is generally easier to work with.",
  },
  {
    keywords: [
      'what browser', 'which browser', 'browser support', 'does it work in chrome',
      'does it work in safari', 'does it work in firefox',
    ],
    response:
      "Carbon Atlas works in any modern browser — Chrome, Firefox, Safari, or Edge. Just make sure JavaScript is enabled, since the assessment and calculations run client-side in your browser.",
  },
  {
    keywords: [
      'save multiple reports', 'multiple assessments', 'compare two reports',
      'compare periods', 'compare month to month', 'history of reports',
    ],
    response:
      "The tool currently generates one report per assessment session and doesn't store a running history for you automatically — if you want to compare periods over time, print/save each report as a PDF when you complete it so you have your own record to compare against later.",
  },
  {
    keywords: [
      'share my report', 'send my report', 'share with my manager', 'share results',
    ],
    response:
      "The easiest way is 'Print / Save as PDF' on the report page, then email or share that PDF however you'd normally distribute a document — the report is laid out to print cleanly as a standalone file.",
  },
  {
    keywords: [
      'is this a real audit', 'is this official', 'certified report', 'legally binding',
      'can i submit this officially',
    ],
    response:
      "This tool gives you a strong working estimate of your footprint, but it isn't a certified audit. For any official or regulatory submission, buyer compliance filing, or public sustainability claim, have a certified third-party auditor verify the figures — the report itself flags this in its 'Important Notes & Assumptions' section.",
  },
  {
    keywords: [
      'accessibility', 'screen reader', 'colour blind', 'color blind',
    ],
    response:
      "The interface uses standard semantic markup and reasonable color contrast, but if you run into a specific accessibility barrier, please flag it via the Contact Support page (rafiulmicrosoft2025@gmail.com) so it can be addressed.",
  },
  {
    keywords: [
      'what language', 'other languages', 'bangla', 'bengali version',
      'is there a bangla version',
    ],
    response:
      "The site currently runs in English only. If a localized version would help your team, mention it via Contact Support — rafiulmicrosoft2025@gmail.com.",
  },

  // ============================================================
  // DEEPER GHG SCIENCE & GAS-SPECIFIC TERMS
  // ============================================================
  {
    keywords: [
      'methane', 'ch4', 'what is methane', 'what is ch4',
    ],
    response:
      "Methane (CH₄) is a greenhouse gas produced whenever organic matter decomposes without oxygen — in this assessment, mainly from wastewater treatment. It's also released from natural gas leaks upstream of combustion. Molecule for molecule, methane traps roughly 28-36 times more heat than CO₂ over a 100-year horizon, which is why the wastewater treatment questions in the Process Emissions category can move your total tCO₂e figure more than their small physical kg quantities might suggest.",
  },
  {
    keywords: [
      'nitrous oxide', 'n2o', 'what is nitrous oxide', 'what is n2o',
      'laughing gas',
    ],
    response:
      "Nitrous oxide (N₂O) is a greenhouse gas formed during certain biological and chemical processes — in this tool, primarily during wastewater treatment nitrification/denitrification. It has an even higher Global Warming Potential than methane (roughly 265-298 times that of CO₂), so it's tracked as its own line item under Process Emissions even though the physical quantities involved are usually small.",
  },
  {
    keywords: [
      'hfc', 'hfcs', 'hydrofluorocarbon', 'what are hfcs', 'r22', 'r410a', 'r32',
      'refrigerant type', 'types of refrigerant',
    ],
    response:
      "HFCs (hydrofluorocarbons) are the synthetic refrigerant gases used in most modern air conditioning, chillers, and refrigeration units — common types include R410A and R32, with older systems still using R22 (which is also ozone-depleting and being phased out under the Montreal Protocol). HFCs carry very high Global Warming Potentials, often in the thousands, which is why even a small refrigerant leak can register as a meaningful tCO₂e figure in the Fugitive Emissions category. Newer refrigerants (like R32 or natural refrigerants such as ammonia or CO₂ systems) generally have lower GWPs than the HFC blends they're replacing.",
  },
  {
    keywords: [
      'kigali amendment', 'montreal protocol', 'ozone layer', 'ozone depleting substance',
      'hfc phase down', 'hfc phasedown',
    ],
    response:
      "The Montreal Protocol (1987) is the international treaty that phased out ozone-depleting substances like CFCs and, later, HCFCs. The Kigali Amendment (2016) extended it to phase down HFCs specifically because of their high global-warming impact, even though they don't harm the ozone layer directly. In practice this means the refrigerants available to replace aging HVAC and refrigeration equipment are shifting toward lower-GWP options — worth factoring in when you next replace a chiller or AC unit flagged in your Fugitive Emissions results.",
  },
  {
    keywords: [
      'biogenic emissions', 'biogenic carbon', 'what is biogenic',
    ],
    response:
      "Biogenic emissions are CO₂ released from organic (plant- or bio-based) sources rather than fossil fuels — burning biomass or agricultural waste, for example. They're typically accounted for separately from fossil emissions in formal GHG inventories because the carbon involved was recently absorbed from the atmosphere rather than extracted from long-buried fossil deposits. This assessment doesn't currently separate biogenic sources; all activity data is converted using standard fossil-based emission factors.",
  },
  {
    keywords: [
      'carbon sink', 'what is a carbon sink', 'deforestation', 'afforestation',
      'reforestation',
    ],
    response:
      "A carbon sink is anything that absorbs more carbon from the atmosphere than it releases — forests, oceans, and soil are the major natural ones. Deforestation removes sink capacity (and often releases stored carbon directly); afforestation/reforestation restores it. These sit outside a factory's direct emissions accounting but are commonly referenced in offset programs a company might use to compensate for emissions this tool measures.",
  },
  {
    keywords: [
      'life cycle assessment', 'lca', 'embodied carbon', 'embodied energy',
      'cradle to grave', 'cradle to gate',
    ],
    response:
      "A Life Cycle Assessment (LCA) measures the total environmental impact of a product across its entire life — raw material extraction, manufacturing, transport, use, and disposal ('cradle to grave'), or up to the factory gate only ('cradle to gate'). Embodied carbon refers specifically to the emissions locked into a product or material before it even reaches your facility — the cotton or synthetic fiber you receive already carries an emissions history. This assessment measures your factory's own operational emissions (Scope 1 and 2), not the embodied carbon of incoming materials, which would fall under Scope 3.",
  },
  {
    keywords: [
      'carbon intensity', 'emissions per unit', 'intensity metric',
      'emissions per garment', 'per unit production',
    ],
    response:
      "Carbon intensity expresses emissions relative to output — for example, kgCO₂e per garment produced, or per unit of revenue — rather than as an absolute total. It's useful for comparing efficiency across different production volumes or benchmarking against industry peers, since a factory producing twice as much will naturally have a higher absolute footprint even if it's more efficient per unit. This tool reports your absolute total (tCO₂e); dividing that by your production volume for the same period gives you your own intensity figure.",
  },
  {
    keywords: [
      'baseline year', 'what is a baseline year', 'reference year', 'base year',
    ],
    response:
      "A baseline year is the first reporting period against which all future progress is measured — if your factory's emissions fall 15% next year, that's 15% below whatever your baseline year showed. Most reduction targets (including buyer or Science Based Targets initiative commitments) are expressed relative to a stated baseline year, so your very first completed Carbon Atlas assessment is a natural candidate to designate as yours.",
  },
  {
    keywords: [
      'activity data', 'what is activity data', 'input data',
    ],
    response:
      "Activity data is the raw operational figure you enter into the assessment — litres of diesel burned, kWh of electricity consumed, kg of refrigerant topped up. It's called 'activity' data because it describes what you did, as distinct from the emission factor, which describes the emissions consequence of doing it. Multiplying activity data by the matching emission factor is the entire calculation this tool performs.",
  },
  {
    keywords: [
      'verification', 'third party verification', 'audit process', 'certified auditor',
      'who verifies emissions', 'external audit',
    ],
    response:
      "Verification is an independent check — usually by an accredited third-party auditor — confirming that reported emissions data is accurate, complete, and calculated according to the stated methodology. It's what turns a self-reported estimate (like this tool's output) into a defensible, buyer- or regulator-acceptable disclosure. Verification typically involves the auditor reviewing your source records (utility bills, fuel purchase logs, refrigerant service records) against what was entered here.",
  },
  {
    keywords: [
      'organizational boundary', 'operational control', 'equity share', 'financial control',
      'reporting boundary',
    ],
    response:
      "Organizational boundary refers to which facilities and operations a company includes in its emissions report — decided under 'operational control' (you report 100% of emissions from anything you operate, regardless of ownership share), 'financial control', or 'equity share' (you report emissions proportional to your ownership stake) approaches. For a single-facility assessment like the one this tool supports, the boundary is simply your own factory's activities.",
  },
  {
    keywords: [
      'sbti', 'science based targets', 'science based targets initiative',
    ],
    response:
      "The Science Based Targets initiative (SBTi) is a body that validates corporate emissions-reduction targets against what climate science says is actually needed to limit warming to 1.5-2°C, rather than accepting arbitrary percentage pledges. Committing to an SBTi-validated target requires a credible measured baseline first — exactly what a completed Carbon Atlas assessment gives you a running start on.",
  },
  {
    keywords: [
      'cdp', 'carbon disclosure project', 'tcfd', 'climate related financial disclosure',
    ],
    response:
      "CDP (formerly the Carbon Disclosure Project) runs the most widely used global system for companies to disclose environmental data, including greenhouse gas emissions, often at the request of investors or buyers. TCFD (Task Force on Climate-related Financial Disclosures) is a related framework focused on how companies report climate risk to investors. Both typically require the same underlying activity and emissions data this assessment collects.",
  },
  {
    keywords: [
      'greenwashing', 'what is greenwashing',
    ],
    response:
      "Greenwashing is making environmental claims that overstate or misrepresent actual sustainability performance — for example, claiming 'carbon neutral' status without a measured baseline or credible offsets behind it. The best protection against unintentional greenwashing is exactly what this tool provides: a transparent, methodology-based calculation you can show your work on, rather than an unverifiable claim.",
  },
  {
    keywords: [
      'climate risk', 'physical risk', 'transition risk',
    ],
    response:
      "Physical climate risk refers to direct operational threats from climate change — flooding, extreme heat, cyclones, and water stress, which are significant concerns for low-lying, coastal Bangladesh. Transition risk refers to business risk from the shift to a lower-carbon economy — new regulations, carbon pricing, or buyers favoring lower-emission suppliers. Measuring your footprint with this tool is primarily a transition-risk management step: it prepares you for buyer and regulatory expectations before they become mandatory.",
  },
  {
    keywords: [
      'bangladesh climate vulnerability', 'bangladesh flooding', 'sea level rise bangladesh',
      'cyclone bangladesh', 'why is bangladesh vulnerable to climate change',
    ],
    response:
      "Bangladesh is one of the countries most vulnerable to climate change impacts globally — its low-lying delta geography makes it highly exposed to sea-level rise, river flooding, and increasingly intense cyclones, while shifting monsoon patterns affect water availability for both agriculture and industry. This vulnerability is part of why industrial emissions reduction carries extra weight here: Bangladeshi manufacturers are contributing a small share of global emissions while facing some of the most direct physical consequences of the warming those emissions cause worldwide.",
  },
  {
    keywords: [
      'ndc', 'nationally determined contribution', 'bangladesh climate target',
      'bangladesh emissions target',
    ],
    response:
      "A Nationally Determined Contribution (NDC) is the emissions-reduction pledge each country submits under the Paris Agreement. Bangladesh's NDC includes both unconditional targets (achievable with domestic resources) and more ambitious conditional targets (dependent on international climate finance and technology support), spanning power generation, industry, and transport. Industrial energy efficiency — the kind this tool's action plan targets — is one of the practical levers contributing to that national commitment.",
  },
  {
    keywords: [
      'srede', 'sreda', 'renewable energy authority bangladesh', 'net metering bangladesh',
      'solar policy bangladesh',
    ],
    response:
      "SREDA (Sustainable and Renewable Energy Development Authority) is Bangladesh's government body overseeing renewable energy and energy efficiency policy, including net-metering rules that let facilities with rooftop solar sell excess generation back to the grid. If your action plan flags purchased electricity as a major source, checking current SREDA guidelines and incentives is a sensible next step before commissioning a solar feasibility study.",
  },
  {
    keywords: [
      'load shedding', 'power outage', 'grid reliability bangladesh', 'backup power reason',
    ],
    response:
      "Load shedding (planned or unplanned grid power cuts) is a major reason many Bangladeshi factories run diesel or gas backup generators — which is exactly why Stationary Combustion (generators) often shows up as a significant emissions category in this tool. Reducing reliance on backup generation, through grid-tied battery storage or solar-plus-storage, cuts both fuel costs and the fuel-combustion emissions tracked here.",
  },
  {
    keywords: [
      'diesel vs natural gas emissions', 'diesel vs gas generator', 'which fuel is cleaner',
      'compare fuel emissions',
    ],
    response:
      "Per unit of energy delivered, natural gas combustion generally produces less CO₂ than diesel, since natural gas has a higher hydrogen-to-carbon ratio. That said, both remain fossil fuels, and switching between them mainly changes your emission factor, not the underlying need to reduce fuel demand itself — efficiency and load reduction measures (like the ones in your action plan) matter regardless of which fuel your equipment uses.",
  },
  {
    keywords: [
      'coefficient of performance', 'chiller cop', 'chiller efficiency rating',
    ],
    response:
      "Coefficient of Performance (COP) measures a chiller's cooling output relative to the electrical energy it consumes — a higher COP means more cooling per kWh. Older chillers often run at a fraction of the COP of modern equivalents, so when your action plan flags chillers as a leak or electricity source, it's also worth checking the unit's age and COP rating alongside the leak-repair recommendation.",
  },
  {
    keywords: [
      'variable frequency drive', 'vfd', 'what is a vfd',
    ],
    response:
      "A Variable Frequency Drive (VFD) lets an electric motor run at the speed actual demand requires, instead of always running at full speed and being throttled mechanically. Fitting VFDs to compressors, pumps, and fans is one of the highest-return electrical efficiency upgrades available in a factory, since motors are very commonly oversized for their actual average load.",
  },
  {
    keywords: [
      'power factor', 'power factor correction', 'what is power factor',
    ],
    response:
      "Power factor measures how efficiently your facility's electrical load uses the power supplied — a low power factor (common with lots of induction motors, like sewing-floor and production machinery) means you draw more current than the useful work being done requires, incurring demand penalties from your utility. Power-factor correction capacitors fix this, cutting both electricity losses and often your utility bill directly, alongside your measured emissions.",
  },
  {
    keywords: [
      'boiler efficiency', 'boiler rating', 'condensate recovery detail',
      'steam trap detail',
    ],
    response:
      "Boiler efficiency measures how much of the fuel's energy actually converts to usable steam versus being lost as flue gas heat, radiation, or blowdown. Condensate recovery — capturing and returning the hot water left after steam gives up its heat — is one of the cheapest efficiency wins available, since that water is already treated and hot, cutting both the fuel needed to reheat fresh water and the water treatment chemicals required. Steam traps, meanwhile, are the small valves that release condensate while holding back live steam; a failed-open trap can waste a surprising amount of steam continuously until it's identified and replaced.",
  },
  {
    keywords: [
      'effluent treatment plant', 'etp', 'zero liquid discharge', 'zld',
      'wastewater treatment plant',
    ],
    response:
      "An Effluent Treatment Plant (ETP) is the on-site facility that treats a factory's wastewater before discharge — it's exactly where the methane and nitrous oxide tracked in this assessment's Wastewater Treatment category originate. Zero Liquid Discharge (ZLD) is a more advanced approach where treated water is recycled back into production rather than discharged at all, cutting both water use and, often, the volume of waste going through anaerobic (methane-producing) treatment stages.",
  },
  {
    keywords: [
      'green financing', 'green bond', 'green loan', 'ifc loan', 'world bank green finance',
    ],
    response:
      "Green financing refers to loans, bonds, or credit lines specifically for environmentally beneficial projects — energy efficiency upgrades, renewable installations, wastewater treatment improvements — often at preferential rates from development finance institutions or local banks running dedicated green facilities. A quantified Carbon Atlas report with a clear action plan is exactly the kind of documentation lenders typically ask for when assessing a green financing application.",
  },
  {
    keywords: [
      'payback period', 'roi', 'return on investment efficiency', 'cost of energy upgrade',
    ],
    response:
      "Payback period is how long it takes for the money saved by an efficiency upgrade (lower fuel or electricity bills) to cover its upfront cost. Many of the actions in your Recommended Action Plan — LED retrofits, compressed-air leak repair, steam trap replacement — are known for short payback periods, often under two years, which is why they're usually prioritized before larger capital projects like solar installations or equipment replacement.",
  },
  {
    keywords: [
      'sustainability committee', 'green team', 'employee engagement sustainability',
      'management commitment',
    ],
    response:
      "A dedicated sustainability committee or 'green team' — with clear management backing — is consistently what separates factories that sustain their efficiency gains from those that see savings erode after the first year. Assigning ownership of the Recommended Action Plan items to specific people, with a review cadence, turns a one-time report into an ongoing improvement program.",
  },
  {
    keywords: [
      'target setting', 'smart goals', 'reduction target', 'set a target',
      'how to set an emissions target',
    ],
    response:
      "A good emissions reduction target is specific (tied to a named category or activity), measurable (in tCO₂e, using this report as your baseline), achievable (grounded in the realistic impact ranges shown in your action plan), relevant (aligned to buyer or regulatory expectations you actually face), and time-bound (a clear deadline). Re-running this assessment each period against your original baseline is how you track whether you're hitting it.",
  },
  {
    keywords: [
      'benchmark', 'industry average', 'compare to other factories', 'peer comparison',
    ],
    response:
      "This tool doesn't currently include an industry-benchmark comparison — your report shows your own totals, category breakdown, and highest emitters, but not how you rank against other factories. Industry benchmarks for garment manufacturing carbon intensity are typically available through sector bodies (like BGMEA in Bangladesh) or buyer sustainability programs, and pairing those external benchmarks with this tool's per-unit-production intensity figure (if you calculate one) gives you a fuller picture.",
  },
  {
    keywords: [
      'mitigation vs adaptation', 'climate mitigation', 'climate adaptation',
      'what is mitigation', 'what is adaptation',
    ],
    response:
      "Mitigation means reducing the greenhouse gases causing climate change in the first place — everything this tool's assessment and action plan are built around. Adaptation means adjusting operations to cope with climate impacts that are already happening or locked in — flood-proofing a low-lying factory, securing backup water supply during drought, or reinforcing structures against more intense storms. A resilient sustainability strategy generally needs both, but this calculator is specifically a mitigation tool.",
  },
  {
    keywords: [
      'just transition', 'what is a just transition',
    ],
    response:
      "A 'just transition' is the principle that shifting to lower-carbon operations shouldn't come at the cost of workers' jobs or livelihoods — for example, retraining staff for new equipment roles rather than displacing them outright when efficiency upgrades change how a production line runs. It's a common consideration for buyers assessing not just whether a factory reduced emissions, but how it did so.",
  },
  {
    keywords: [
      'eu ets', 'cap and trade', 'emissions trading scheme',
    ],
    response:
      "Cap-and-trade (or an Emissions Trading Scheme, like the EU ETS) is a regulatory system that sets a shrinking overall emissions cap for covered industries and lets companies trade allowances within it — those who cut emissions faster than required can sell surplus allowances; those who don't must buy more. Bangladesh doesn't currently operate a domestic scheme like this, but manufacturers exporting into regions with one increasingly need verifiable emissions data to navigate related border measures like CBAM.",
  },
  {
    keywords: [
      're100', 'power purchase agreement', 'ppa', 'renewable energy certificate', 'rec',
    ],
    response:
      "A Power Purchase Agreement (PPA) is a long-term contract to buy electricity directly from a renewable generator, often at a fixed and sometimes lower rate than grid tariffs. A Renewable Energy Certificate (REC) represents the environmental attribute of one unit of renewable generation, which can be purchased separately from the physical electricity to claim renewable usage on paper. RE100 is a global corporate initiative committing members to 100% renewable electricity — relevant if your buyers are RE100 members asking suppliers to align with their sourcing commitments.",
  },
  {
    keywords: [
      'csrd', 'corporate sustainability reporting directive', 'eu due diligence directive',
      'csddd',
    ],
    response:
      "The Corporate Sustainability Reporting Directive (CSRD) is an EU regulation requiring large companies (and increasingly their significant suppliers) to disclose detailed environmental data, including greenhouse gas emissions, in a standardized format. Related due-diligence rules extend expectations further down the supply chain. If your buyers fall under CSRD, they will very likely request emissions data from you in a format similar to what this assessment already produces.",
  },
  {
    keywords: [
      'water footprint', 'embodied water', 'water use in factories',
    ],
    response:
      "A water footprint measures total water consumption and pollution associated with production — a related but distinct metric from carbon footprint, though the two often move together in a garment factory: wet processing (dyeing, washing, finishing) drives both significant water use and, through wastewater treatment and steam demand, a meaningful share of the emissions this tool tracks. This assessment measures carbon specifically; a separate water audit would be needed to quantify your water footprint.",
  },
  {
    keywords: [
      'decarbonization', 'decarbonization roadmap', 'what is decarbonization',
      'decarbonisation',
    ],
    response:
      "Decarbonization is the process of systematically reducing the carbon intensity of your operations — typically sequenced as: measure your baseline (what this tool does), cut demand through efficiency (your action plan's first actions), switch remaining demand to lower-carbon sources (renewables, cleaner fuels), and finally address any unavoidable residual emissions. A decarbonization roadmap is simply that sequence laid out with target dates, which your Carbon Report gives you the starting data to build.",
  },
  {
    keywords: [
      'climate finance', 'international climate funding', 'green climate fund',
    ],
    response:
      "Climate finance refers to funding — from governments, development banks, or dedicated funds like the Green Climate Fund — specifically directed at climate mitigation or adaptation projects, often on preferential terms for developing countries like Bangladesh. Factory-level efficiency and renewable energy projects identified in your action plan are frequently eligible categories for this kind of financing when packaged with a credible emissions baseline.",
  },
  {
    keywords: [
      'demand side management', 'peak shaving', 'peak demand',
    ],
    response:
      "Demand-side management means adjusting when and how you use electricity, rather than only how much — for example, staggering machine start-ups to avoid a sharp demand spike ('peak shaving'), which can lower both your utility demand charges and the strain that drives inefficient generator backup use. It complements the efficiency actions in your plan by smoothing out load rather than only reducing total consumption.",
  },
  {
    keywords: [
      'resilience', 'climate resilience', 'what is resilience',
    ],
    response:
      "Climate resilience is a facility's ability to keep operating through climate-related disruption — extreme heat affecting worker safety, flooding threatening ground-floor equipment, or grid instability during storms. It's distinct from the emissions-reduction focus of this tool, but the two are often connected in practice: on-site solar with battery storage, for instance, both cuts your measured purchased-electricity emissions and gives you backup power resilience during grid outages.",
  },
  {
    keywords: [
      'annual report sustainability section', 'sustainability report', 'how to write a sustainability report',
      'sustainability disclosure',
    ],
    response:
      "A sustainability report typically covers your environmental performance (including greenhouse gas emissions), social performance (labour practices, community impact), and governance practices, often structured against a recognized framework like GRI (Global Reporting Initiative). The emissions figures, category breakdown, and action plan from your Carbon Atlas report can feed directly into the environmental section — total tCO₂e for the period, the direct/indirect split, and your named reduction initiatives are exactly the data points most sustainability report templates ask for.",
  },
  {
    keywords: [
      'what is a factory carbon footprint', 'industrial carbon footprint', 'manufacturing emissions',
    ],
    response:
      "A factory's carbon footprint is the total greenhouse gas emissions generated by its operations over a given period, expressed in tCO₂e — combining direct emissions from fuel burned on-site, vehicles, refrigerant leaks, and manufacturing processes, plus indirect emissions from purchased electricity and utilities. It's the industrial-scale version of the same 'carbon footprint' concept applied to individuals or households, just measured against operational activity data instead of lifestyle choices, which is exactly what this assessment calculates for your facility.",
  },
];