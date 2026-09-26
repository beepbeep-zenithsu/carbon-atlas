export interface KBEntry {
  keywords: string[];
  response: string;
}

export const knowledgeBase: KBEntry[] = [
  // ============================================================
  // SMALL TALK
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
      "Running smoothly, thanks for asking! 🌱 Ready when you are — ask me about the assessment, your report, or any carbon concept.",
  },
  {
    keywords: [
      'good morning', 'morning', 'gm', 'top of the morning',
    ],
    response: "Good morning! ☀️ How can I help with your carbon assessment today?",
  },
  {
    keywords: ['good afternoon', 'afternoon'],
    response: "Good afternoon! What would you like to know?",
  },
  {
    keywords: ['good evening', 'evening'],
    response: "Good evening! Ask me anything about the calculator or your report.",
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
      "Hey there! 👋 Ask me anything about the Carbon Atlas calculator, your report, or carbon-footprint concepts.",
  },
  {
    keywords: [
      'who are you', 'what are you', 'your name', 'what should i call you',
      'whats your name', "what's your name", 'introduce yourself',
      'tell me about yourself', 'who am i talking to', 'who is this',
    ],
    response:
      "I'm the Carbon Atlas assistant — a friendly helper built into this app to answer questions about the assessment and carbon reporting.",
  },
  {
    keywords: [
      'are you a robot', 'are you human', 'are you an ai', 'are you real',
      'are you a bot', 'are you chatgpt', 'are you a person',
      'is this ai', 'is this a bot', 'is this human',
    ],
    response:
      "I'm a rule-based assistant — no AI magic, just a curated knowledge base about this tool. So if something's off-topic, I might not know it. 😅",
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
    response: "🙌 Anything else you'd like to explore?",
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
    response: "You're welcome — good luck with your assessment! 🌱",
  },
  {
    keywords: [
      'bye', 'goodbye', 'see you', 'see ya', 'later', 'cya',
      'catch you later', 'talk later', 'farewell', 'i am leaving',
      "i'm leaving", 'gtg', 'got to go',
    ],
    response: "See you! Come back if you need help. 👋",
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
    response: "Aw, thank you! 🌿 Now let's save the planet one report at a time.",
  },
  {
    keywords: [
      'tell me a joke', 'joke', 'make me laugh', 'funny', 'something funny',
      'say something funny', 'make me smile',
    ],
    response:
      "Why did the carbon atom break up with the oxygen atom? Because it needed some space. 🌌 (Ok, I'll stick to carbon footprints.)",
  },
  {
    keywords: [
      'what can you do', 'what can i ask', 'help me', 'i need help',
      'what do you know', 'what topics', 'what questions', 'your skills',
      'what are you capable of', 'capabilities',
    ],
    response:
      "I can help with: starting the assessment, reading your carbon report, tCO₂e and emission factors, direct vs indirect emissions, recommendations, printing, restarting, and general site navigation. Just ask away — try natural phrasing, I'm flexible!",
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
      "Easy — hit the 'Start Assessment' button on the home page. You'll work through six short categories (fuel, vehicles, gas leakage, production, electricity, purchased energy). Takes about 5–10 minutes, and you'll land on your Carbon Report at the end.",
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
      "Your Carbon Report is the final screen. It shows total emissions in tCO₂e, breaks them down by category, splits direct vs indirect, and ranks your top emitters. You can print it, edit answers, or start over from there.",
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
      "tCO₂e = 'tonnes of CO₂ equivalent'. It's the standard unit for carbon footprints — it converts different greenhouse gases (methane, refrigerants, etc.) into the equivalent warming impact of CO₂ so they can be added together.",
  },

  // ============================================================
  // DIRECT EMISSIONS
  // ============================================================
  {
    keywords: [
      'direct emissions', 'direct emission', 'what are direct',
      'what is direct', 'scope 1', 'scope one',
      'emissions i own', 'emissions we own', 'emissions i control',
    ],
    response:
      "Direct emissions come from sources your business owns or controls — in this tool that's fuel combustion, company vehicles, fugitive gases, and production activities.",
  },

  // ============================================================
  // INDIRECT EMISSIONS
  // ============================================================
  {
    keywords: [
      'indirect emissions', 'indirect emission', 'what are indirect',
      'what is indirect', 'scope 2', 'scope two', 'scope 3', 'scope three',
      'purchased electricity', 'purchased energy',
    ],
    response:
      "Indirect emissions happen because of your business but occur at sources owned by someone else. Here that means purchased electricity/utilities and purchased energy (steam, heat, cooling).",
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
      "Click 'Try an example' on the home page — it loads realistic sample data so you can explore a full report instantly. It's marked as demonstration data, so don't submit it as real results.",
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
      "On the report page, click 'Print / Save as PDF'. Your browser's print dialog opens — pick 'Save as PDF' as the destination to download a clean copy.",
  },

  // ============================================================
  // RECOMMENDATIONS
  // ============================================================
  {
    keywords: [
      'recommend', 'recommendation', 'recommendations', 'improve',
      'improvement', 'reduce', 'reducing', 'lower', 'cut emission',
      'cut emissions', 'reduce my emissions', 'how to reduce',
      'how can i reduce', 'how do i reduce', 'reduce footprint',
      'action plan', 'actions', 'next steps', 'what can i do',
      'how to improve', 'tips', 'advice', 'suggestions',
    ],
    response:
      "The report's 'Improvement Recommendations' section lists targeted actions for your profile — things like energy audits, rooftop solar, refrigerant maintenance, and wastewater methane capture. Each one may include an estimated emission saving.",
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
      "An emission factor converts an activity (like 1 litre of diesel) into the amount of CO₂ it produces. This tool uses region-specific factors for Bangladesh where available.",
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
      "Fugitive emissions are gases that escape from pressurised equipment — the classic example being refrigerant leaks from air conditioning. They're counted under the 'Gas Leakage' category.",
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
      "Yes — emission factors here are region-specific to Bangladesh where possible. Results are estimates though, so get them verified by a certified auditor before any official submission.",
  },

  // ============================================================
  // CHARTS
  // ============================================================
  {
    keywords: [
      'chart', 'charts', 'pie chart', 'bar chart', 'graph', 'graphs',
      'visual', 'visuals', 'visualization', 'diagram',
      'what are the charts', 'explain the chart', 'explain the charts',
      'what do the charts show', 'pie', 'bar',
    ],
    response:
      "You'll see two charts on the report: a pie chart for contribution by category, and a horizontal bar chart ranking all 48 subheadings by emissions. Hover over any slice or bar for exact values.",
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
      "Click 'Edit answers' on the report page — it takes you back through the assessment with your previous answers already filled in.",
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
      "At the bottom of the report, click 'Start again from scratch'. That wipes your answers and drops you back on the home page.",
  },

  // ============================================================
  // ABOUT
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
      "Carbon Atlas is a public carbon footprint calculator built for university sustainability engineering assignments. It's a React + TypeScript app using Vite, Tailwind CSS, GSAP, and Recharts.",
  },

  // ============================================================
  // CONTACT / SUPPORT
  // ============================================================
  {
    keywords: [
      'contact', 'contact support', 'support', 'help page',
      'get in touch', 'reach out', 'email', 'phone',
      'complaint', 'feedback', 'report a bug', 'bug', 'issue',
    ],
    response:
      "There's a Contact Support page linked in the footer. Use that to reach the team for feedback, bugs, or questions about the project.",
  },

  // ============================================================
  // PRIVACY / TERMS
  // ============================================================
  {
    keywords: [
      'privacy', 'privacy policy', 'data policy', 'my data',
      'is my data safe', 'do you store data', 'data storage', 'gdpr',
      'terms', 'terms of service', 'tos', 'legal', 'license',
    ],
    response:
      "There are Privacy Policy and Terms of Service pages linked in the footer. Everything runs in your browser — answers aren't uploaded anywhere unless you explicitly save them.",
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
      "The assessment covers six areas: fuel combustion, vehicle operations, gas leakage, production activities, electricity & utilities, and purchased energy. Each has a handful of questions about your usage.",
  },
];