// Mock data — replace with API calls when backend is ready

// ─── Types ───────────────────────────────────────────────────────────────────

export interface RiskBreakdown {
  criterion: string;
  score: number; // 1-5, higher = riskier
  label: string;
}

export interface InvestmentOpportunity {
  id: string;
  name: string;
  sector: string;
  city: string;
  country: string;
  description: string;
  tagline: string;
  equityAvailable: number;
  raisingTarget: number;
  raisedAmount: number;
  investorCount: number;
  daysLeft: number;
  minInvestment: number;
  highlight: string;
  riskScore: number; // 1–5
  riskBreakdown: RiskBreakdown[];
  fullDescription: string;
  mission: string;
  marketOpportunity: string;
  financials: {
    revenue: string;
    growth: string;
    profitMargin: string;
    yearFounded: number;
    employees: number;
    projections: { year: string; revenue: string; profit: string }[];
  };
  team: {
    name: string;
    role: string;
    bio: string;
    initials: string;
    color: string;
    linkedin: string;
  }[];
  tokenDetails: {
    name: string;
    symbol: string;
    totalSupply: number;
    pricePerToken: number;
    chain: string;
    contractAddress: string;
    spvName: string;
  };
  dividends: {
    expectedYield: string;
    frequency: string;
    nextDistribution: string;
    history: { period: string; perToken: string; total: string }[];
  };
  perks: {
    tier: string;
    minTokens: number;
    description: string;
    items: string[];
  }[];
  documents: { name: string; type: string; size: string }[];
  timeline: { date: string; event: string; done: boolean }[];
  faqs: { q: string; a: string }[];
}

// ─── Platform stats ───────────────────────────────────────────────────────────

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

// ─── Live Investment Opportunities ───────────────────────────────────────────

export const LIVE_OPPORTUNITIES: InvestmentOpportunity[] = [
  {
    id: "op1",
    name: "Café Nero Berlin",
    sector: "Hospitality",
    city: "Berlin",
    country: "Germany",
    description: "Premium specialty coffee chain expanding to 3 new locations in Berlin.",
    tagline: "Berlin's favourite specialty coffee house — now open to community investment.",
    equityAvailable: 15,
    raisingTarget: 250000,
    raisedAmount: 187500,
    investorCount: 312,
    daysLeft: 14,
    minInvestment: 100,
    highlight: "Loyal community of 8,000+ daily customers",
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Business Maturity", score: 1, label: "6 years operating" },
      { criterion: "Revenue Consistency", score: 2, label: "Seasonal variation, strong baseline" },
      { criterion: "Sector Volatility", score: 2, label: "Stable F&B market" },
      { criterion: "Equity Offered", score: 2, label: "15% — moderate stake" },
      { criterion: "Market Size", score: 1, label: "Large urban coffee market" },
      { criterion: "Team Experience", score: 1, label: "10+ year operators" },
      { criterion: "Regulatory Status", score: 1, label: "Fully MiCA compliant" },
    ],
    fullDescription:
      "Café Nero Berlin was founded in 2019 with a mission to bring specialty coffee culture to neighbourhood communities across Berlin. What started as a single location in Prenzlauer Berg has grown to 4 thriving cafés serving over 8,000 customers daily. We partner exclusively with direct-trade roasters in Ethiopia, Colombia, and Guatemala — building relationships that ensure both quality and fair pay for farmers. Now we're expanding to 3 new Berlin districts: Mitte, Friedrichshain, and Neukölln.",
    mission:
      "To create spaces where the local community gathers — not just for exceptional coffee, but for connection. Every café is designed to be a neighbourhood living room.",
    marketOpportunity:
      "The German specialty coffee market is valued at €4.2B and growing at 8% annually. Berlin leads with 220+ specialty venues, yet demand continues to outpace supply in emerging neighbourhoods. Our expansion targets districts with high foot traffic, underserved specialty coffee demand, and strong residential communities.",
    financials: {
      revenue: "€1.8M",
      growth: "22%",
      profitMargin: "18%",
      yearFounded: 2019,
      employees: 42,
      projections: [
        { year: "2025", revenue: "€2.2M", profit: "€396K" },
        { year: "2026", revenue: "€2.8M", profit: "€504K" },
        { year: "2027", revenue: "€3.4M", profit: "€612K" },
      ],
    },
    team: [
      {
        name: "Sophie Kaufmann",
        role: "Founder & CEO",
        bio: "Former Starbucks regional manager turned independent operator. Built the brand from a single kiosk to 4 locations in 5 years.",
        initials: "SK",
        color: "#C4663A",
        linkedin: "#",
      },
      {
        name: "Jonas Weber",
        role: "Head of Operations",
        bio: "10 years in F&B operations across Berlin and Hamburg. Expert in supply chain and staff training for multi-site hospitality.",
        initials: "JW",
        color: "#B8954F",
        linkedin: "#",
      },
      {
        name: "Mia Fischer",
        role: "Head of Coffee & Product",
        bio: "Q Grader certified, winner of the 2023 Berlin Barista Championship. Leads all sourcing partnerships and menu development.",
        initials: "MF",
        color: "#4A7C59",
        linkedin: "#",
      },
    ],
    tokenDetails: {
      name: "Café Nero Berlin Token",
      symbol: "CNB",
      totalSupply: 2500,
      pricePerToken: 100,
      chain: "Arbitrum",
      contractAddress: "0x742d35Cc6634C0532925a3b844Bc454e4438f44e",
      spvName: "CNB Capital SPV (Malta) Ltd.",
    },
    dividends: {
      expectedYield: "6–8%",
      frequency: "Quarterly",
      nextDistribution: "July 2026",
      history: [
        { period: "Q3 2025", perToken: "€1.80", total: "€4,500" },
        { period: "Q4 2025", perToken: "€2.10", total: "€5,250" },
        { period: "Q1 2026", perToken: "€1.95", total: "€4,875" },
      ],
    },
    perks: [
      {
        tier: "Holder",
        minTokens: 1,
        description: "For all CNB token holders",
        items: ["10% off all purchases", "Monthly investor newsletter", "Early menu previews"],
      },
      {
        tier: "Plus",
        minTokens: 25,
        description: "For holders of 25+ tokens",
        items: ["15% off all purchases", "Free coffee every Friday", "Invite to quarterly tastings"],
      },
      {
        tier: "VIP",
        minTokens: 100,
        description: "For holders of 100+ tokens",
        items: ["20% off all purchases", "Bi-annual investor dinner", "Name on our 'Wall of Founders'", "Input on new location decisions"],
      },
    ],
    documents: [
      { name: "Investor Information Document", type: "PDF", size: "1.2 MB" },
      { name: "Malta SPV Registration Certificate", type: "PDF", size: "340 KB" },
      { name: "CertiK Smart Contract Audit Report", type: "PDF", size: "890 KB" },
      { name: "Financial Statements 2024", type: "PDF", size: "2.1 MB" },
      { name: "MiCA Compliance Declaration", type: "PDF", size: "480 KB" },
    ],
    timeline: [
      { date: "Apr 1, 2026", event: "Campaign launched — KYC onboarding opens", done: true },
      { date: "Apr 20, 2026", event: "300 investors milestone reached", done: true },
      { date: "May 1, 2026", event: "75% funding milestone (€187,500)", done: true },
      { date: "May 18, 2026", event: "Campaign closes — final 14 days", done: false },
      { date: "Jun 1, 2026", event: "Token distribution to investor wallets", done: false },
      { date: "Jul 15, 2026", event: "First quarterly dividend payment", done: false },
    ],
    faqs: [
      { q: "When does the campaign close?", a: "The campaign closes on May 18, 2026 — 14 days from now. Invest before then to participate." },
      { q: "How quickly will I receive my tokens?", a: "Tokens are distributed to verified wallets within 2 weeks after the campaign closes, once KYC confirmation is complete." },
      { q: "What happens if the €250,000 target isn't reached?", a: "This is an all-or-nothing raise. If we don't hit the minimum target, all funds are returned in full. No fees charged." },
      { q: "Can I visit the cafés before investing?", a: "Absolutely — and we encourage it. Visit any of our 4 Berlin locations. You can also request a virtual investor Q&A with Sophie." },
    ],
  },

  {
    id: "op2",
    name: "Studio Volta",
    sector: "Creative/Media",
    city: "Hamburg",
    country: "Germany",
    description: "Independent design studio with €1.2M ARR expanding into product licensing.",
    tagline: "Hamburg's leading independent design studio — entering its product licensing era.",
    equityAvailable: 12,
    raisingTarget: 180000,
    raisedAmount: 126000,
    investorCount: 214,
    daysLeft: 21,
    minInvestment: 100,
    highlight: "12.91% avg return on similar offerings",
    riskScore: 4,
    riskBreakdown: [
      { criterion: "Business Maturity", score: 3, label: "3 years operating" },
      { criterion: "Revenue Consistency", score: 4, label: "Project-based, variable" },
      { criterion: "Sector Volatility", score: 4, label: "Creative/IP market volatility" },
      { criterion: "Equity Offered", score: 2, label: "12% — modest stake" },
      { criterion: "Market Size", score: 3, label: "Competitive design market" },
      { criterion: "Team Experience", score: 3, label: "First-time founders, strong portfolio" },
      { criterion: "Regulatory Status", score: 2, label: "Standard MiCA compliance" },
    ],
    fullDescription:
      "Studio Volta is a Hamburg-based creative studio that has quietly become the go-to design partner for mid-market consumer brands across Germany and Scandinavia. Since 2022 we've delivered brand identities, campaign design, and packaging for 60+ clients — generating €1.2M ARR from repeat business alone. Now we're pivoting from pure service into a product company: launching a licensed design system and a physical stationery brand that will create recurring, scalable revenue independent of project work.",
    mission:
      "To prove that a design studio can build products as well as it builds brands. We design with intention — and now we're designing our own future.",
    marketOpportunity:
      "The global brand licensing market is worth €280B. Design IP — fonts, illustration systems, pattern libraries — is an emerging category capturing growing budgets from D2C and retail brands. Our existing client base provides an immediate distribution channel for licensed products with minimal acquisition cost.",
    financials: {
      revenue: "€1.2M",
      growth: "85%",
      profitMargin: "12%",
      yearFounded: 2022,
      employees: 18,
      projections: [
        { year: "2025", revenue: "€2.2M", profit: "€264K" },
        { year: "2026", revenue: "€3.8M", profit: "€456K" },
        { year: "2027", revenue: "€5.5M", profit: "€660K" },
      ],
    },
    team: [
      {
        name: "Lena Hoffmann",
        role: "Co-Founder & Creative Director",
        bio: "Former creative director at Serviceplan. 8 years leading brand campaigns for Adidas, BMW, and DM. Built Studio Volta's reputation from zero.",
        initials: "LH",
        color: "#B8954F",
        linkedin: "#",
      },
      {
        name: "Tobias Renz",
        role: "Co-Founder & Business Director",
        bio: "MBA from WHU, previously at McKinsey. Leads all client relationships and is architecting the product licensing pivot.",
        initials: "TR",
        color: "#7C8CF8",
        linkedin: "#",
      },
      {
        name: "Aysha Osei",
        role: "Head of Product",
        bio: "Product designer from the Netherlands, previously at WeTransfer. Leading the development of Studio Volta's first licensed design system.",
        initials: "AO",
        color: "#C4663A",
        linkedin: "#",
      },
    ],
    tokenDetails: {
      name: "Studio Volta Token",
      symbol: "SVT",
      totalSupply: 1800,
      pricePerToken: 100,
      chain: "Arbitrum",
      contractAddress: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
      spvName: "Volta Creative IP SPV (Malta) Ltd.",
    },
    dividends: {
      expectedYield: "4–6%",
      frequency: "Semi-annual",
      nextDistribution: "December 2026",
      history: [
        { period: "H2 2025", perToken: "€2.40", total: "€4,320" },
        { period: "H1 2026", perToken: "€3.10", total: "€5,580" },
      ],
    },
    perks: [
      {
        tier: "Holder",
        minTokens: 1,
        description: "For all SVT token holders",
        items: ["Access to Studio Volta community Slack", "Monthly creative industry digest", "10% off licensed design products"],
      },
      {
        tier: "Studio",
        minTokens: 30,
        description: "For holders of 30+ tokens",
        items: ["20% off licensed products", "Early access to new design collections", "Invite to bi-annual studio open day"],
      },
      {
        tier: "Partner",
        minTokens: 75,
        description: "For holders of 75+ tokens",
        items: ["30% off licensed products", "Annual 1:1 with Lena & Tobias", "Name in product credits", "Co-design input on upcoming collection"],
      },
    ],
    documents: [
      { name: "Investor Information Document", type: "PDF", size: "1.4 MB" },
      { name: "Malta SPV Certificate", type: "PDF", size: "310 KB" },
      { name: "Smart Contract Audit (CertiK)", type: "PDF", size: "940 KB" },
      { name: "Revenue & Client Report 2024", type: "PDF", size: "1.8 MB" },
      { name: "Product Licensing Strategy Deck", type: "PDF", size: "5.2 MB" },
    ],
    timeline: [
      { date: "Mar 15, 2026", event: "Campaign launched", done: true },
      { date: "Apr 10, 2026", event: "200 investors onboarded", done: true },
      { date: "May 5, 2026", event: "70% funding milestone (€126,000)", done: true },
      { date: "Jun 5, 2026", event: "Campaign closes", done: false },
      { date: "Jun 20, 2026", event: "Token distribution", done: false },
      { date: "Jul 1, 2026", event: "Product licensing division launches", done: false },
      { date: "Dec 31, 2026", event: "First semi-annual dividend", done: false },
    ],
    faqs: [
      { q: "What is the product licensing pivot?", a: "We're moving from pure service (custom design projects) to creating reusable design systems and physical products that are licensed to brands. This creates recurring revenue rather than one-time project fees." },
      { q: "Is the studio revenue dependent on any single client?", a: "No. Our top client represents 11% of revenue. We have 60+ active clients across Germany, Austria, and Scandinavia — strong diversification." },
      { q: "Why is the risk score higher than other offerings?", a: "We're an early-stage pivot into a new business model. Service revenue is solid but the licensing strategy is unproven. Higher risk, higher upside." },
      { q: "What happens to existing service revenue?", a: "It continues — and funds the product development. We're not replacing the service model; we're layering licensing on top of it." },
    ],
  },

  {
    id: "op3",
    name: "Markt & Co",
    sector: "Retail",
    city: "Munich",
    country: "Germany",
    description: "Curated local goods marketplace with 40+ artisan suppliers.",
    tagline: "Munich's curated artisan marketplace — growing from boutique to brand.",
    equityAvailable: 18,
    raisingTarget: 120000,
    raisedAmount: 54000,
    investorCount: 89,
    daysLeft: 30,
    minInvestment: 100,
    highlight: "Opening 2nd location Q2 2026",
    riskScore: 3,
    riskBreakdown: [
      { criterion: "Business Maturity", score: 2, label: "4 years operating" },
      { criterion: "Revenue Consistency", score: 3, label: "Moderate seasonal variation" },
      { criterion: "Sector Volatility", score: 3, label: "Retail market headwinds" },
      { criterion: "Equity Offered", score: 3, label: "18% — larger stake" },
      { criterion: "Market Size", score: 2, label: "Strong artisan goods segment" },
      { criterion: "Team Experience", score: 2, label: "Prior retail experience" },
      { criterion: "Regulatory Status", score: 2, label: "Full MiCA compliance" },
    ],
    fullDescription:
      "Markt & Co is a curated retail concept bringing together 40+ independent artisan suppliers under one roof in Munich's Maxvorstadt district. Founded in 2021, we offer a handpicked selection of local food, homeware, ceramics, textiles, and personal care products — items you won't find on Amazon or in chain stores. Each supplier is personally vetted by our team, and 30% of all profits are reinvested into supplier development and community events. We're opening our second location in Schwabing in Q3 2026, targeting Munich's densest concentration of independent-minded consumers.",
    mission:
      "To give independent makers a sustainable, beautiful place to sell — and to give Munich shoppers an antidote to everything that looks the same.",
    marketOpportunity:
      "The 'buy local' retail movement is growing 15% annually across Germany. Munich's affluent, culturally active consumer base spends 2.3× the national average on artisan and independent goods. Our waitlist of supplier applicants currently stands at 120+ — demand significantly exceeds our current capacity.",
    financials: {
      revenue: "€680K",
      growth: "34%",
      profitMargin: "14%",
      yearFounded: 2021,
      employees: 28,
      projections: [
        { year: "2025", revenue: "€910K", profit: "€127K" },
        { year: "2026", revenue: "€1.3M", profit: "€182K" },
        { year: "2027", revenue: "€1.8M", profit: "€252K" },
      ],
    },
    team: [
      {
        name: "Clara Brenner",
        role: "Founder & CEO",
        bio: "Former buyer at Manufactum, 9 years in curated retail. Launched Markt & Co after seeing the gap between what artisan makers produce and what retail stores stock.",
        initials: "CB",
        color: "#4A7C59",
        linkedin: "#",
      },
      {
        name: "David Park",
        role: "Head of Supplier Relations",
        bio: "Supply chain background from ALDI Nord. Manages all 40+ supplier relationships, vetting, and community development programs.",
        initials: "DP",
        color: "#B8954F",
        linkedin: "#",
      },
    ],
    tokenDetails: {
      name: "Markt & Co Token",
      symbol: "MKC",
      totalSupply: 1200,
      pricePerToken: 100,
      chain: "Base",
      contractAddress: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      spvName: "Markt & Co Retail SPV (Malta) Ltd.",
    },
    dividends: {
      expectedYield: "5–7%",
      frequency: "Quarterly",
      nextDistribution: "August 2026",
      history: [
        { period: "Q2 2025", perToken: "€1.40", total: "€1,680" },
        { period: "Q3 2025", perToken: "€1.75", total: "€2,100" },
        { period: "Q4 2025", perToken: "€2.20", total: "€2,640" },
      ],
    },
    perks: [
      {
        tier: "Holder",
        minTokens: 1,
        description: "For all MKC token holders",
        items: ["10% off all in-store purchases", "Monthly supplier spotlight newsletter", "Invite to seasonal market events"],
      },
      {
        tier: "Supporter",
        minTokens: 20,
        description: "For holders of 20+ tokens",
        items: ["15% off all purchases", "Early access to new supplier launches", "Bi-annual artisan gift box (€50 value)"],
      },
      {
        tier: "Patron",
        minTokens: 60,
        description: "For holders of 60+ tokens",
        items: ["20% off all purchases", "Quarterly private supplier preview evening", "Name on our Patron Wall", "Vote on new supplier selections"],
      },
    ],
    documents: [
      { name: "Investor Information Document", type: "PDF", size: "1.1 MB" },
      { name: "Malta SPV Registration", type: "PDF", size: "290 KB" },
      { name: "CertiK Audit Report", type: "PDF", size: "820 KB" },
      { name: "Annual Report 2024", type: "PDF", size: "1.9 MB" },
      { name: "Second Location Business Plan", type: "PDF", size: "3.1 MB" },
    ],
    timeline: [
      { date: "Apr 5, 2026", event: "Campaign launched", done: true },
      { date: "Apr 25, 2026", event: "50 investors onboarded", done: true },
      { date: "May 4, 2026", event: "45% funding milestone (€54,000)", done: true },
      { date: "Jun 4, 2026", event: "Campaign closes", done: false },
      { date: "Jun 18, 2026", event: "Token distribution", done: false },
      { date: "Jul 1, 2026", event: "Construction begins on Schwabing location", done: false },
      { date: "Sep 15, 2026", event: "Second location opens", done: false },
      { date: "Oct 31, 2026", event: "First dividend payment", done: false },
    ],
    faqs: [
      { q: "How does the second location affect projections?", a: "The Schwabing location is projected to add €480K revenue in its first full year. Projections already account for the investment and buildout costs." },
      { q: "Why 18% equity — more than other offerings?", a: "We're offering more equity because we want our investors to have meaningful ownership and stronger alignment. With two locations, the upside grows accordingly." },
      { q: "Do suppliers have any say in the business?", a: "Yes — we have a monthly supplier council where they vote on market themes, community events, and product categories. This is a community business, not just a shop." },
      { q: "What are the main business risks?", a: "Retail headwinds (people shopping online) and location costs. We mitigate by having zero online competition for our curation model, and by structuring leases as revenue-sharing not fixed rent." },
    ],
  },

  {
    id: "op4",
    name: "Wellness Hub",
    sector: "Local Services",
    city: "Frankfurt",
    country: "Germany",
    description: "Boutique fitness & wellness center with 2,400 active members.",
    tagline: "Frankfurt's boutique fitness sanctuary — 2,400 members and growing.",
    equityAvailable: 10,
    raisingTarget: 90000,
    raisedAmount: 31500,
    investorCount: 52,
    daysLeft: 45,
    minInvestment: 100,
    highlight: "Projected 28% revenue growth in 2026",
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Business Maturity", score: 1, label: "5 years operating" },
      { criterion: "Revenue Consistency", score: 2, label: "Membership model, predictable" },
      { criterion: "Sector Volatility", score: 2, label: "Wellness sector resilience" },
      { criterion: "Equity Offered", score: 1, label: "10% — conservative stake" },
      { criterion: "Market Size", score: 2, label: "Growing wellness market" },
      { criterion: "Team Experience", score: 2, label: "Proven operators in wellness" },
      { criterion: "Regulatory Status", score: 1, label: "Fully compliant" },
    ],
    fullDescription:
      "Wellness Hub Frankfurt was founded in 2020 and has grown to become one of Frankfurt's most respected boutique fitness and wellness destinations. With 2,400 active members and a 94% monthly retention rate, we operate on a subscription model that generates predictable, recurring revenue — unlike traditional gyms. Our offering covers yoga, functional fitness, breathwork, cold water therapy, infrared sauna, and nutrition coaching under one roof. We're raising capital to fund a second location in Frankfurt Sachsenhausen and expand our corporate wellness programme — now our fastest-growing revenue stream.",
    mission:
      "To make premium wellness accessible to everyone who's serious about it — without the pretension or the absurd price tags of luxury spas.",
    marketOpportunity:
      "The German wellness market is valued at €14B and growing at 11% annually, accelerated by post-pandemic health consciousness. Corporate wellness — our fastest-growing segment — is projected to grow 19% annually through 2028. Frankfurt, as Germany's financial hub, has exceptional corporate demand with 400+ firms within 2km of our planned Sachsenhausen site.",
    financials: {
      revenue: "€420K",
      growth: "28%",
      profitMargin: "22%",
      yearFounded: 2020,
      employees: 34,
      projections: [
        { year: "2025", revenue: "€537K", profit: "€118K" },
        { year: "2026", revenue: "€750K", profit: "€165K" },
        { year: "2027", revenue: "€1.1M", profit: "€242K" },
      ],
    },
    team: [
      {
        name: "Niklas Berger",
        role: "Founder & CEO",
        bio: "Former Nike EMEA fitness director. 12 years in premium fitness, launched and sold one boutique gym before founding Wellness Hub.",
        initials: "NB",
        color: "#C4663A",
        linkedin: "#",
      },
      {
        name: "Sarah Maier",
        role: "Head of Member Experience",
        bio: "Certified yoga instructor and wellness coach. Designed the Wellness Hub programming curriculum and leads all practitioner relationships.",
        initials: "SM",
        color: "#4A7C59",
        linkedin: "#",
      },
      {
        name: "Felix König",
        role: "Head of Corporate Wellness",
        bio: "B2B sales background from Gympass. Built our corporate programme from zero to €85K ARR in 18 months.",
        initials: "FK",
        color: "#B8954F",
        linkedin: "#",
      },
    ],
    tokenDetails: {
      name: "Wellness Hub Token",
      symbol: "WLH",
      totalSupply: 900,
      pricePerToken: 100,
      chain: "Arbitrum",
      contractAddress: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      spvName: "Wellness Hub Services SPV (Malta) Ltd.",
    },
    dividends: {
      expectedYield: "4–6%",
      frequency: "Quarterly",
      nextDistribution: "September 2026",
      history: [
        { period: "Q3 2025", perToken: "€1.10", total: "€990" },
        { period: "Q4 2025", perToken: "€1.35", total: "€1,215" },
        { period: "Q1 2026", perToken: "€1.20", total: "€1,080" },
      ],
    },
    perks: [
      {
        tier: "Holder",
        minTokens: 1,
        description: "For all WLH token holders",
        items: ["2 complimentary day passes per quarter", "10% off all memberships and classes", "Monthly wellness newsletter"],
      },
      {
        tier: "Wellness",
        minTokens: 20,
        description: "For holders of 20+ tokens",
        items: ["4 complimentary day passes per quarter", "20% off all memberships", "Free nutrition consultation annually"],
      },
      {
        tier: "Sanctuary",
        minTokens: 50,
        description: "For holders of 50+ tokens",
        items: ["Unlimited day passes", "25% off memberships", "Private group class hosting (4×/year)", "Invite to annual investor wellness retreat"],
      },
    ],
    documents: [
      { name: "Investor Information Document", type: "PDF", size: "1.0 MB" },
      { name: "Malta SPV Certificate", type: "PDF", size: "305 KB" },
      { name: "CertiK Smart Contract Audit", type: "PDF", size: "860 KB" },
      { name: "Financial Statements 2024", type: "PDF", size: "1.6 MB" },
      { name: "Second Location Feasibility Study", type: "PDF", size: "2.8 MB" },
    ],
    timeline: [
      { date: "Mar 20, 2026", event: "Campaign launched", done: true },
      { date: "Apr 12, 2026", event: "50 investors milestone", done: true },
      { date: "May 4, 2026", event: "35% funding milestone (€31,500)", done: true },
      { date: "Jun 18, 2026", event: "Campaign closes", done: false },
      { date: "Jul 1, 2026", event: "Token distribution to wallets", done: false },
      { date: "Aug 1, 2026", event: "Sachsenhausen lease signed", done: false },
      { date: "Oct 1, 2026", event: "Second location opens", done: false },
      { date: "Sep 30, 2026", event: "First quarterly dividend", done: false },
    ],
    faqs: [
      { q: "What is the membership retention rate?", a: "94% monthly retention — significantly above the industry average of 78% for boutique fitness. This is driven by the programming quality and community aspect." },
      { q: "How important is the corporate segment?", a: "Currently 20% of revenue (€85K ARR) and growing at 40% annually. We have signed corporate agreements with 12 Frankfurt firms including 2 bulge-bracket banks." },
      { q: "Is the 10% equity enough to be meaningful?", a: "With our projected revenue trajectory, 10% equity today would yield approximately €24,200/year in dividends by 2027, representing a strong return on a €9,000 investment at full token price." },
      { q: "What's the risk if the second location underperforms?", a: "The existing single location is already profitable and self-sustaining. The raise funds the expansion only — current operations continue regardless of second location performance." },
    ],
  },
];

// ─── Kryptondo team (used on for-business page) ───────────────────────────────

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

// ─── FAQs ─────────────────────────────────────────────────────────────────────

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

// ─── Car Subscription Types ───────────────────────────────────────────────────

export interface CarListing {
  id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  tokenPrice: number;
  totalTokens: number;
  soldTokens: number;
  investors: number;
  daysLeft: number;
  monthlyRevenue: number;
  rentalRatePerDay: number;
  occupancyPct: number;
  riskScore: number;
  riskBreakdown: RiskBreakdown[];
  features: string[];
  location: string;
  pickupPoints: string[];
  chain: string;
  contractAddress: string;
  spvName: string;
  ownershipYield: string;
  rentalYield: string;
  description: string;
  faqs: { q: string; a: string }[];
}

// ─── Cars Data ────────────────────────────────────────────────────────────────

export const CARS: CarListing[] = [
  {
    id: "car1",
    make: "Tesla",
    model: "Model 3",
    year: 2025,
    color: "Pearl White",
    price: 35000,
    tokenPrice: 50,
    totalTokens: 700,
    soldTokens: 480,
    investors: 34,
    daysLeft: 18,
    monthlyRevenue: 1800,
    rentalRatePerDay: 89,
    occupancyPct: 78,
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Asset Depreciation", score: 2, label: "EV holds value well" },
      { criterion: "Rental Demand", score: 1, label: "Tesla — consistently high demand" },
      { criterion: "Maintenance Risk", score: 2, label: "Fleet-managed, minimal exposure" },
      { criterion: "Market Liquidity", score: 2, label: "Strong resale market" },
      { criterion: "Revenue Consistency", score: 2, label: "High occupancy track record" },
    ],
    features: ["Autopilot", "Long Range AWD", "360° cameras", "Heat pump", "15\" touchscreen", "Premium audio"],
    location: "Berlin, Germany",
    pickupPoints: ["Berlin Mitte", "Berlin Schönefeld Airport", "Berlin Hauptbahnhof"],
    chain: "Arbitrum",
    contractAddress: "0x0000...car1",
    spvName: "Kryptondo Fleet SPV I (Malta)",
    ownershipYield: "4–5%",
    rentalYield: "5–6%",
    description: "A 2025 Tesla Model 3 Long Range AWD joining our Berlin premium fleet. The Model 3 is our best-performing vehicle with consistent 78%+ occupancy and strong demand from both business and leisure travellers.",
    faqs: [
      { q: "How is rental revenue distributed?", a: "Smart contracts split monthly revenue proportionally to token holdings. Rental investors receive 100% of their share. Co-owners receive their share only for days they don't use the car." },
      { q: "Can I switch between co-ownership and rental model?", a: "Model switching will be available from Q4 2026. At launch, you choose your model at investment time." },
      { q: "What if the car is damaged?", a: "All fleet vehicles carry comprehensive commercial insurance. Investors are fully protected from damage costs — Kryptondo Fleet handles all claims." },
      { q: "How do I book the car as a co-owner?", a: "Via the Kryptondo app — a calendar-based booking system allocates time proportionally to your token holding. Minimum booking: 1 day, maximum: your annual allocation." },
      { q: "Can I sell my car tokens?", a: "Yes, via the P2P marketplace launching Q3 2026, or via direct wallet transfer to a KYC-verified buyer." },
    ],
  },
  {
    id: "car2",
    make: "BMW",
    model: "330i",
    year: 2025,
    color: "Alpine White",
    price: 48000,
    tokenPrice: 60,
    totalTokens: 800,
    soldTokens: 320,
    investors: 22,
    daysLeft: 28,
    monthlyRevenue: 2200,
    rentalRatePerDay: 110,
    occupancyPct: 72,
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Asset Depreciation", score: 2, label: "BMW premium resale value" },
      { criterion: "Rental Demand", score: 2, label: "Strong business traveller appeal" },
      { criterion: "Maintenance Risk", score: 2, label: "BMW service contract included" },
      { criterion: "Market Liquidity", score: 1, label: "Premium segment — high liquidity" },
      { criterion: "Revenue Consistency", score: 2, label: "72% avg occupancy" },
    ],
    features: ["M Sport package", "Navigation Pro", "Heated seats", "Parking assistant", "19\" M alloys", "Harman Kardon audio"],
    location: "Munich, Germany",
    pickupPoints: ["Munich Airport", "Munich Hauptbahnhof", "Munich City Centre"],
    chain: "Base",
    contractAddress: "0x0000...car2",
    spvName: "Kryptondo Fleet SPV II (Malta)",
    ownershipYield: "4–5%",
    rentalYield: "5–7%",
    description: "A 2025 BMW 330i M Sport joining our Munich business fleet. Preferred by corporate travellers, the 330i commands premium daily rates and achieves 72% occupancy driven by business travel demand.",
    faqs: [
      { q: "How is rental revenue distributed?", a: "Smart contracts distribute monthly revenue proportionally to token holdings on the 1st of each month." },
      { q: "Can I switch models?", a: "Model switching available from Q4 2026. Choose at investment time." },
      { q: "What about BMW service costs?", a: "A BMW service contract is included in the fleet management fee. No extra costs for investors." },
      { q: "How many days can I use the car annually?", a: "Co-owners receive driving days proportional to their token holding. 1% ownership = ~2.6 non-occupied days per year, booked via app." },
      { q: "Is there a security deposit for co-use?", a: "A refundable deposit is held during co-use periods, released within 48h after return with no damage reported." },
    ],
  },
  {
    id: "car3",
    make: "Mercedes",
    model: "A 250",
    year: 2025,
    color: "Cosmos Black",
    price: 42000,
    tokenPrice: 55,
    totalTokens: 764,
    soldTokens: 600,
    investors: 45,
    daysLeft: 9,
    monthlyRevenue: 2000,
    rentalRatePerDay: 99,
    occupancyPct: 75,
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Asset Depreciation", score: 2, label: "Mercedes retains premium value" },
      { criterion: "Rental Demand", score: 2, label: "High demand across all segments" },
      { criterion: "Maintenance Risk", score: 1, label: "Mercedes service plan included" },
      { criterion: "Market Liquidity", score: 2, label: "Strong used market" },
      { criterion: "Revenue Consistency", score: 1, label: "75% occupancy, stable trend" },
    ],
    features: ["AMG Line exterior", "MBUX infotainment", "Widescreen cockpit", "Burmester audio", "Ambient lighting", "Wireless CarPlay"],
    location: "Hamburg, Germany",
    pickupPoints: ["Hamburg Airport", "Hamburg HBF", "Hamburg Altona"],
    chain: "Arbitrum",
    contractAddress: "0x0000...car3",
    spvName: "Kryptondo Fleet SPV I (Malta)",
    ownershipYield: "4–6%",
    rentalYield: "5–7%",
    description: "A 2025 Mercedes A 250 AMG Line entering our Hamburg fleet. One of our most popular models — nearly 80% funded. At 75% occupancy and €99/day, this is a strong performer for both co-owners and rental investors.",
    faqs: [
      { q: "How is rental revenue distributed?", a: "Monthly smart contract distribution. Co-owners receive their share minus usage days; rental investors receive 100% of their proportional share every month." },
      { q: "Can I switch from co-ownership to rental?", a: "Not at launch. Model switching is planned for Q4 2026." },
      { q: "Why is this nearly fully funded?", a: "The Mercedes A 250 is popular due to its combination of premium feel, fuel efficiency, and broad appeal. High demand means faster funding." },
      { q: "What happens when it's 100% funded?", a: "The car is purchased within 5 business days, enters the fleet within 14 days of purchase, and your first dividend arrives at the next monthly cycle." },
      { q: "Can I sell my tokens?", a: "Yes — P2P marketplace Q3 2026, or direct wallet transfer." },
    ],
  },
  {
    id: "car4",
    make: "VW",
    model: "ID.4",
    year: 2025,
    color: "Dusk Blue",
    price: 40000,
    tokenPrice: 50,
    totalTokens: 800,
    soldTokens: 150,
    investors: 12,
    daysLeft: 42,
    monthlyRevenue: 1600,
    rentalRatePerDay: 79,
    occupancyPct: 68,
    riskScore: 3,
    riskBreakdown: [
      { criterion: "Asset Depreciation", score: 3, label: "EV market evolving rapidly" },
      { criterion: "Rental Demand", score: 3, label: "Growing but still maturing" },
      { criterion: "Maintenance Risk", score: 2, label: "Fleet-managed, EV-specialist team" },
      { criterion: "Market Liquidity", score: 3, label: "EV resale market developing" },
      { criterion: "Revenue Consistency", score: 3, label: "68% occupancy — improving" },
    ],
    features: ["Pro AWD", "77kWh battery", "500km range", "Panoramic roof", "IQ.Drive assist", "Fast charging support"],
    location: "Frankfurt, Germany",
    pickupPoints: ["Frankfurt Airport", "Frankfurt HBF", "Frankfurt Messe"],
    chain: "Base",
    contractAddress: "0x0000...car4",
    spvName: "Kryptondo Fleet SPV III (Malta)",
    ownershipYield: "3–5%",
    rentalYield: "4–6%",
    description: "A 2025 VW ID.4 Pro AWD entering our Frankfurt EV fleet. As EV infrastructure matures across Germany, occupancy is growing. Early investors benefit from lower token prices as the category grows — higher risk, higher upside.",
    faqs: [
      { q: "Why is the risk higher for this car?", a: "The EV rental market is growing but less established than ICE vehicles. Occupancy is improving steadily at 68%+, but carries more uncertainty than our premium segment." },
      { q: "How is rental revenue distributed?", a: "Same as all fleet cars — monthly smart contract distribution proportional to token holdings." },
      { q: "What about EV charging costs?", a: "Charging costs are covered by Kryptondo Fleet as part of the management fee. Renters pay a fuel-equivalent charge included in the daily rate." },
      { q: "Is this a good entry point?", a: "At €50/token with lower initial demand, this represents the best entry price. As the EV category matures, occupancy and revenue are projected to grow." },
      { q: "Can I sell my tokens?", a: "Yes — P2P marketplace Q3 2026." },
    ],
  },
];

export const CAR_FAQS = [
  { q: "How is rental revenue distributed?", a: "Smart contracts automatically split monthly rental revenue proportional to token holdings. Rental investors receive 100% of their share; co-owners receive their share only for days they don't use the car." },
  { q: "Can I switch between co-ownership and rental investment?", a: "At launch, you choose your model at investment time. Model switching will be available from Q4 2026." },
  { q: "What happens if the car is damaged?", a: "All fleet vehicles carry comprehensive commercial insurance paid for by Kryptondo Fleet. Investors are fully protected from any damage liability — we handle all claims and repairs." },
  { q: "Is the car insured?", a: "Yes. Full commercial insurance including third-party liability, comprehensive damage, and roadside assistance. Insurance costs are factored into the fleet management fee, not charged separately to investors." },
  { q: "Can I sell my car tokens?", a: "Yes. Our P2P token marketplace launches Q3 2026 for 24/7 trading. Until then, tokens can be transferred directly between KYC-verified wallets." },
  { q: "What if the car needs major maintenance?", a: "A maintenance reserve is set aside from each car's monthly revenue. All scheduled and unscheduled maintenance is handled by Kryptondo Fleet — investors bear no direct cost." },
  { q: "How are driving days allocated (co-ownership)?", a: "Driving days are proportional to your token holding. 1% ownership in a fleet car = approximately your share of the car's non-rented days per year, booked via the Kryptondo app." },
];
