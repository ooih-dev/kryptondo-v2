// Mock data — replace with API calls when backend is ready

export const TRUST_STATS_B2B = [
  { value: "12", label: "Businesses Listed" },
  { value: "€2.4M", label: "Raised" },
  { value: "1,800+", label: "Investors" },
  { value: "6", label: "Countries" },
];

export const TRUST_STATS_B2C = [
  { value: "€2.4M+", label: "Total Invested" },
  { value: "1,800+", label: "Active Investors" },
  { value: "12", label: "Funded Businesses" },
  { value: "€100", label: "Minimum Investment" },
];

export const LIVE_OPPORTUNITIES = [
  {
    id: "op1",
    name: "Café Nero Berlin",
    sector: "Hospitality",
    city: "Berlin",
    description: "Premium specialty coffee chain expanding to 3 new locations in Berlin.",
    equityAvailable: 15,
    raisingTarget: 250000,
    raisedAmount: 187500,
    investorCount: 312,
    daysLeft: 14,
    minInvestment: 100,
    highlight: "Loyal community of 8,000+ daily customers",
  },
  {
    id: "op2",
    name: "Studio Volta",
    sector: "Creative/Media",
    city: "Hamburg",
    description: "Independent design studio with €1.2M ARR expanding into product licensing.",
    equityAvailable: 12,
    raisingTarget: 180000,
    raisedAmount: 126000,
    investorCount: 214,
    daysLeft: 21,
    minInvestment: 100,
    highlight: "12.91% avg return on similar offerings",
  },
  {
    id: "op3",
    name: "Markt & Co",
    sector: "Retail",
    city: "Munich",
    description: "Curated local goods marketplace with 40+ artisan suppliers.",
    equityAvailable: 18,
    raisingTarget: 120000,
    raisedAmount: 54000,
    investorCount: 89,
    daysLeft: 30,
    minInvestment: 100,
    highlight: "Opening 2nd location Q2 2026",
  },
  {
    id: "op4",
    name: "Wellness Hub",
    sector: "Local Services",
    city: "Frankfurt",
    description: "Boutique fitness & wellness center with 2,400 active members.",
    equityAvailable: 10,
    raisingTarget: 90000,
    raisedAmount: 31500,
    investorCount: 52,
    daysLeft: 45,
    minInvestment: 100,
    highlight: "Projected 28% revenue growth in 2026",
  },
];

export const TEAM_MEMBERS = [
  {
    name: "Marcus Schreiber",
    role: "Head of Finance",
    bio: "10+ years in investment banking (Deutsche Bank, Goldman Sachs). Structured €800M+ in securities offerings.",
    initials: "MS",
    color: "#00D4FF",
  },
  {
    name: "Alexei Volkov",
    role: "Chief Technology Officer",
    bio: "Blockchain architect, ex-Consensys. Built tokenization infrastructure processing $200M+ in digital assets.",
    initials: "AV",
    color: "#C9A84C",
  },
  {
    name: "Elena Müller",
    role: "Head of Legal",
    bio: "Securities lawyer, 8 years specializing in Malta/EU financial regulation, MiCA compliance, and SPV structuring.",
    initials: "EM",
    color: "#7C8CF8",
  },
];

export const B2B_FAQS = [
  {
    q: "Do I lose control of my business?",
    a: "No. You offer 10–20% equity maximum. You retain full operational control. Investors get dividends and perks — not board seats or voting rights on operations.",
  },
  {
    q: "How are dividends calculated and distributed?",
    a: "You decide how much profit to distribute and when. Smart contracts automatically split the distribution among all token holders proportionally. For example: you distribute €10,000 → a holder of 0.1% of tokens receives €10 automatically.",
  },
  {
    q: "What are the legal requirements?",
    a: "We set up a Malta-registered SPV (Special Purpose Vehicle) that holds your equity stake. The SPV issues tokens representing fractional ownership. This structure is EU-regulated under MiCA and compliant securities law.",
  },
  {
    q: "What happens if I don't hit my fundraising target?",
    a: "We use an all-or-nothing model. If you don't reach your minimum target, all investor funds are returned. No fees are charged. This protects both you and your investors.",
  },
  {
    q: "How long does the process take?",
    a: "From application to live campaign: approximately 6–8 weeks. This includes due diligence review, SPV setup in Malta, smart contract deployment, and KYC onboarding for your business.",
  },
  {
    q: "What does it cost?",
    a: "No upfront fees. We charge a 5% success fee only when your raise completes. SPV setup is included. You keep 95% of everything raised.",
  },
];

export const B2C_FAQS = [
  {
    q: "What is a Kryptondo token?",
    a: "A token is a digital share certificate — an ownership record stored on Arbitrum blockchain. It represents your fractional stake in a Malta SPV that holds equity in the business. It's legally backed, not speculative.",
  },
  {
    q: "How do dividends work?",
    a: "When a business distributes profits, smart contracts automatically send your share to your wallet. A holder of 0.1% tokens in a business that distributes €10,000 receives €10 automatically — no action needed.",
  },
  {
    q: "Can I sell my tokens?",
    a: "Yes. Our peer-to-peer token marketplace launches Q3 2026, enabling 24/7 trading. Until then, tokens can be transferred directly between verified wallets.",
  },
  {
    q: "What if the business fails?",
    a: "As with any equity investment, you may lose your investment if the business fails. Tokens represent real equity with real risk. We recommend diversifying across multiple businesses and only investing what you can afford to lose.",
  },
  {
    q: "Is this legal and regulated?",
    a: "Yes. All offerings go through a Malta-licensed SPV regulated under EU securities law (MiCA framework). KYC/AML checks are required for all investors. Smart contracts are audited by CertiK.",
  },
  {
    q: "What wallet do I use?",
    a: "Any non-custodial wallet that supports Arbitrum (e.g., MetaMask, Rabby, Coinbase Wallet). We're building embedded wallet support so you won't need prior crypto experience — just an email.",
  },
  {
    q: "What is the minimum investment?",
    a: "€100 minimum per business. You can invest in multiple businesses across different sectors and cities.",
  },
];
