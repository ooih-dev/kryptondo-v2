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
  image: string;
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
    image: "/cars/tesla-model-3.png",
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
    image: "/cars/bmw-330i.png",
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
    image: "/cars/mercedes-a250.png",
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
    image: "/cars/vw-id4.png",
    faqs: [
      { q: "Why is the risk higher for this car?", a: "The EV rental market is growing but less established than ICE vehicles. Occupancy is improving steadily at 68%+, but carries more uncertainty than our premium segment." },
      { q: "How is rental revenue distributed?", a: "Same as all fleet cars — monthly smart contract distribution proportional to token holdings." },
      { q: "What about EV charging costs?", a: "Charging costs are covered by Kryptondo Fleet as part of the management fee. Renters pay a fuel-equivalent charge included in the daily rate." },
      { q: "Is this a good entry point?", a: "At €50/token with lower initial demand, this represents the best entry price. As the EV category matures, occupancy and revenue are projected to grow." },
      { q: "Can I sell my tokens?", a: "Yes — P2P marketplace Q3 2026." },
    ],
  },
];

// ─── Medical Recruiting Types ─────────────────────────────────────────────────

export interface MedicalSPV {
  id: string;
  name: string;
  focus: string;
  description: string;
  tokenPrice: number;
  totalTokens: number;
  soldTokens: number;
  investors: number;
  daysLeft: number;
  avgPlacementFee: number;
  placementsPerYear: number;
  contractRevenueMonthly: number;
  riskScore: number;
  riskBreakdown: RiskBreakdown[];
  placementYield: string;
  staffingYield: string;
  targetHospitals: string[];
  geographicFocus: string;
  chain: string;
  contractAddress: string;
  spvName: string;
  team: { name: string; role: string; bio: string; initials: string; color: string }[];
  faqs: { q: string; a: string }[];
}

// ─── Medical SPV Data ─────────────────────────────────────────────────────────

export const MEDICAL_SPVS: MedicalSPV[] = [
  {
    id: "med1",
    name: "CareConnect ICU",
    focus: "Intensive Care",
    description: "Specialized ICU nurse recruitment for major hospital networks across Germany and Austria.",
    tokenPrice: 75,
    totalTokens: 1000,
    soldTokens: 620,
    investors: 48,
    daysLeft: 21,
    avgPlacementFee: 28000,
    placementsPerYear: 120,
    contractRevenueMonthly: 85000,
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Market Demand", score: 1, label: "ICU nurse shortage is severe and structural" },
      { criterion: "Regulatory Risk", score: 2, label: "EU cross-border placement rules — manageable" },
      { criterion: "Placement Success Rate", score: 2, label: "92% placement success based on pilot" },
      { criterion: "Geographic Concentration", score: 2, label: "DACH region — strong healthcare systems" },
      { criterion: "Revenue Predictability", score: 1, label: "Long-term staffing contracts dominate" },
      { criterion: "Team Experience", score: 1, label: "15+ years combined healthcare recruiting" },
    ],
    placementYield: "14–18%",
    staffingYield: "10–13%",
    targetHospitals: ["Charité Berlin", "AKH Vienna", "LMU Klinikum Munich", "Universitätsklinikum Frankfurt"],
    geographicFocus: "Germany & Austria",
    chain: "Arbitrum",
    contractAddress: "0x3F4e2B1C8A97F4A123D6E5C789B0A2D1F3E8C4B7",
    spvName: "CareConnect ICU Capital SPV (Malta) Ltd.",
    team: [
      { name: "Dr. Katrin Berger", role: "CEO & Medical Director", bio: "Former ICU director at Charité Berlin. 18 years in critical care medicine and healthcare management.", initials: "KB", color: "#C4663A" },
      { name: "Stefan Hoffmann", role: "Head of Recruitment", bio: "12 years placing nurses and specialists across DACH. Built partnerships with 40+ nursing schools in Eastern Europe.", initials: "SH", color: "#B8954F" },
      { name: "Maria Novak", role: "Compliance & Licensing", bio: "EU cross-border healthcare law specialist. Has licensed 300+ nurses for EU practice across 8 countries.", initials: "MN", color: "#4A7C59" },
    ],
    faqs: [
      { q: "How is placement success tracked?", a: "Each placement is logged on-chain: candidate ID, hospital, start date, fee received. Investors can view real-time pipeline data in the dashboard." },
      { q: "What if a nurse placed by the SPV leaves within 3 months?", a: "Our contracts include a 90-day replacement guarantee — if the placed nurse leaves, we find a replacement at no additional fee to the hospital, protecting the SPV's reputation and contract value." },
      { q: "How are dividends paid?", a: "Monthly for staffing contracts (based on hours billed). Per-placement for the placement model — paid within 7 days of fee receipt from hospital." },
      { q: "What regulatory licenses are required?", a: "The SPV holds temporary employment agency licenses in Germany and Austria. All nurses are licensed via EU professional recognition directive (2005/36/EC)." },
      { q: "What is the average contract duration?", a: "Hospital staffing contracts run 12–24 months with 3-month notice clauses. Long-term contract renewals run at 87% historically." },
    ],
  },
  {
    id: "med2",
    name: "NurseLink Europe",
    focus: "General Hospital",
    description: "Cross-border nurse recruitment connecting Eastern European nurses with Western European hospitals.",
    tokenPrice: 50,
    totalTokens: 1200,
    soldTokens: 400,
    investors: 31,
    daysLeft: 35,
    avgPlacementFee: 22000,
    placementsPerYear: 200,
    contractRevenueMonthly: 120000,
    riskScore: 3,
    riskBreakdown: [
      { criterion: "Market Demand", score: 1, label: "Critical nurse shortage in Western EU" },
      { criterion: "Regulatory Risk", score: 3, label: "Immigration and recognition timelines vary" },
      { criterion: "Placement Success Rate", score: 3, label: "85% success — language and adaptation factors" },
      { criterion: "Geographic Concentration", score: 3, label: "Multi-country operations increase complexity" },
      { criterion: "Revenue Predictability", score: 2, label: "Strong but dependent on immigration pipeline" },
      { criterion: "Team Experience", score: 2, label: "Solid team, 6 years operating" },
    ],
    placementYield: "16–20%",
    staffingYield: "11–14%",
    targetHospitals: ["NHS England (UK)", "AP-HP Paris", "Erasmus MC Rotterdam", "UZ Leuven Belgium"],
    geographicFocus: "Western EU — Romania, Poland, Bulgaria supply",
    chain: "Base",
    contractAddress: "0xA1B2C3D4E5F6789012345678901234567890ABCD",
    spvName: "NurseLink Europe SPV (Malta) Ltd.",
    team: [
      { name: "Andrei Popescu", role: "CEO", bio: "Romanian-born, Brussels-based. Founded the first nurse mobility program between Romania and Belgium in 2018.", initials: "AP", color: "#C4663A" },
      { name: "Charlotte Dubois", role: "Head of Hospital Relations", bio: "10 years in healthcare HR at AP-HP Paris. Manages all French and Benelux hospital partnerships.", initials: "CD", color: "#B8954F" },
      { name: "Ioana Munteanu", role: "Nurse Integration Manager", bio: "Registered nurse turned recruiter. Leads language training and cultural integration programs for placed nurses.", initials: "IM", color: "#7c8cf8" },
    ],
    faqs: [
      { q: "How long does it take to place a nurse from Eastern Europe?", a: "Typically 3–6 months: credential recognition (8–12 weeks), language assessment, and placement matching. We have pre-approved pipelines that cut this to 10 weeks for some countries." },
      { q: "What languages do the nurses speak?", a: "All placed nurses pass B2-level language proficiency in the destination country's language (German, French, Dutch, or English) before placement." },
      { q: "Is there political risk around EU immigration policy?", a: "EU free movement of workers is a fundamental treaty right and does not depend on domestic immigration policy. All placed nurses are EU citizens." },
      { q: "What is the average placement fee?", a: "€22,000 net per successful placement, paid by the hospital. This covers credential recognition costs, language training subsidy, and our agency fee." },
    ],
  },
  {
    id: "med3",
    name: "ElderCare Staffing",
    focus: "Elderly Care",
    description: "Dedicated staffing for elderly care homes and home care agencies in the DACH region.",
    tokenPrice: 40,
    totalTokens: 800,
    soldTokens: 700,
    investors: 56,
    daysLeft: 9,
    avgPlacementFee: 18000,
    placementsPerYear: 150,
    contractRevenueMonthly: 95000,
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Market Demand", score: 1, label: "Aging population creates structural demand" },
      { criterion: "Regulatory Risk", score: 2, label: "Elderly care regulated but stable framework" },
      { criterion: "Placement Success Rate", score: 1, label: "96% — excellent retention in care sector" },
      { criterion: "Geographic Concentration", score: 2, label: "DACH — Germany, Austria, Switzerland" },
      { criterion: "Revenue Predictability", score: 1, label: "Long-term care home contracts 24–36 months" },
      { criterion: "Team Experience", score: 1, label: "Founders with 20+ years in elder care sector" },
    ],
    placementYield: "12–15%",
    staffingYield: "9–11%",
    targetHospitals: ["AWO Care Homes (Germany)", "Caritas Austria", "Spitex Switzerland", "Johanniter GmbH"],
    geographicFocus: "Germany, Austria, Switzerland",
    chain: "Arbitrum",
    contractAddress: "0xDEADBEEF12345678901234567890ABCDEF123456",
    spvName: "ElderCare Staffing SPV (Malta) Ltd.",
    team: [
      { name: "Brigitte Hartmann", role: "CEO", bio: "20 years managing care homes in Bavaria. Founded ElderCare after identifying a structural talent gap in the sector.", initials: "BH", color: "#C4663A" },
      { name: "Thomas Keller", role: "CFO", bio: "Healthcare finance specialist. Previously CFO of a 12-facility care home group with €40M annual revenue.", initials: "TK", color: "#4A7C59" },
      { name: "Ana Stojanović", role: "Recruitment Director", bio: "Built recruitment pipelines from Serbia and North Macedonia to Germany. Specialist in care assistant and geriatric nurse placement.", initials: "AS", color: "#B8954F" },
    ],
    faqs: [
      { q: "Why is retention so much higher in elderly care vs hospitals?", a: "Care home workers form long-term bonds with residents. The work environment is stable, lower-stress than acute care, and care homes actively invest in retention through housing support and language assistance." },
      { q: "How are staffing contract revenues distributed?", a: "Monthly distributions based on hours billed. Each care home contract specifies a fixed hourly rate. Revenue after management costs is distributed proportionally to staffing token holders." },
      { q: "What if a care home client terminates a contract early?", a: "All contracts include 90-day termination notice requirements and early termination fees of 2 months' revenue. The SPV maintains a 3-month revenue reserve for all investors." },
      { q: "Is this campaign nearly fully funded?", a: "Yes — we are at 87.5% funding with 9 days remaining. We expect to close at 100% before the deadline." },
    ],
  },
  {
    id: "med4",
    name: "MedRecruits Specialist",
    focus: "Doctors & Specialists",
    description: "Senior doctor and specialist physician recruitment for private hospitals and clinics across the EU.",
    tokenPrice: 100,
    totalTokens: 600,
    soldTokens: 180,
    investors: 15,
    daysLeft: 42,
    avgPlacementFee: 45000,
    placementsPerYear: 60,
    contractRevenueMonthly: 70000,
    riskScore: 3,
    riskBreakdown: [
      { criterion: "Market Demand", score: 2, label: "Specialist shortage in EU growing rapidly" },
      { criterion: "Regulatory Risk", score: 3, label: "Specialist license recognition is complex" },
      { criterion: "Placement Success Rate", score: 3, label: "78% — specialist matching is harder" },
      { criterion: "Geographic Concentration", score: 2, label: "Multi-country but private sector focused" },
      { criterion: "Revenue Predictability", score: 3, label: "Higher fees but longer placement cycles" },
      { criterion: "Team Experience", score: 2, label: "Strong network, early-stage operations" },
    ],
    placementYield: "18–24%",
    staffingYield: "13–17%",
    targetHospitals: ["Schön Klinik Group", "Asklepios Private Clinics", "HCA Healthcare UK", "Quirónsalud Spain"],
    geographicFocus: "EU — Private hospital sector",
    chain: "Base",
    contractAddress: "0xF1E2D3C4B5A6978801234567ABCDEF0123456789",
    spvName: "MedRecruits Specialist SPV (Malta) Ltd.",
    team: [
      { name: "Dr. Hans-Peter Vogel", role: "CEO", bio: "Cardiologist turned healthcare entrepreneur. Founded two specialist recruitment firms before MedRecruits.", initials: "HV", color: "#C4663A" },
      { name: "Isabelle Renard", role: "Head of Physician Relations", bio: "Medical headhunter with 14 years placing surgeons, anaesthesiologists, and specialists across Europe.", initials: "IR", color: "#B8954F" },
      { name: "Markus Braun", role: "Legal & Licensing", bio: "EU medical license specialist. Has navigated physician recognition procedures in 11 EU member states.", initials: "MB", color: "#9E3A2B" },
    ],
    faqs: [
      { q: "Why is the placement fee so much higher for doctors?", a: "Specialist physician placements involve credential verification across multiple medical councils, language certification, and often relocation packages — the hospital values this highly and pays a premium fee of €35k–55k per placement." },
      { q: "How long does a specialist physician placement take?", a: "Typically 4–8 months from initial match to first working day. We maintain a pre-screened pipeline of 200+ qualified physicians to reduce time-to-placement." },
      { q: "What specialist types does the SPV focus on?", a: "Primary focus: surgeons (general, orthopaedic, cardiac), anaesthesiologists, radiologists, and emergency medicine physicians. These are the highest-demand and highest-fee categories." },
      { q: "What is the risk if early-stage campaigns don't fill?", a: "We operate with a minimum-viable funding threshold of 40%. Below this, funds are returned to investors. Above 40%, we can begin operations at reduced scale and grow as additional investors join." },
      { q: "Why invest early in this campaign?", a: "Early investors receive preferential token pricing at €100. Post-campaign token price adjusts to €120 if first-year placements exceed projections." },
    ],
  },
];

export const MEDICAL_FAQS = [
  { q: "How are placement fees tracked and verified?", a: "Each placement generates a smart contract event when the hospital invoice is paid. The amount, hospital, and placement date are recorded on-chain. Investors can view placement activity in real-time from their dashboard." },
  { q: "What is the average placement fee in medical recruiting?", a: "For nurses: €15,000–€30,000 per placement. For specialist physicians: €35,000–€55,000. Fees are paid by the hiring hospital upon the nurse or doctor starting their contract." },
  { q: "How often are dividends paid?", a: "Staffing contract model: monthly (based on hours billed that month). Placement model: per-event, within 7 days of invoice collection from the hospital." },
  { q: "What if a placed medical professional leaves within the guarantee period?", a: "All placements come with a 90-day guarantee. If the nurse or doctor leaves within 90 days for any reason, the SPV replaces them at no cost to the hospital, protecting the placement fee and the SPV's contract relationship." },
  { q: "Is this regulated under EU law?", a: "Yes. Each SPV holds temporary employment agency licenses in its operating countries and complies with EU Directive 2008/104/EC on temporary agency work. All cross-border placements use the EU professional recognition directive (2005/36/EC)." },
  { q: "What is the difference between the Placement Fund and Staffing Contract models?", a: "Placement Fund: higher returns (12–24% yield) tied to one-time placement fees. Returns are lumpy — you earn when placements complete. Staffing Contract: lower but steady returns (9–17%) from ongoing hourly billing contracts. More predictable monthly income." },
];

// ─── Fitness Studio Types ─────────────────────────────────────────────────────

export interface FitnessStudio {
  id: string;
  name: string;
  type: string;
  location: string;
  description: string;
  tokenPrice: number;
  totalTokens: number;
  soldTokens: number;
  investors: number;
  members: number;
  daysLeft: number;
  monthlyRevenue: number;
  avgMemberFee: number;
  riskScore: number;
  estimatedYield: number;
  occupancy: number;
  riskBreakdown: RiskBreakdown[];
  features: string[];
  expansionPlan: string;
  team: { name: string; role: string; bio: string; initials: string; color: string }[];
  faqs: { q: string; a: string }[];
}

// ─── Fitness Studio Data ──────────────────────────────────────────────────────

export const FITNESS_STUDIOS: FitnessStudio[] = [
  {
    id: "fit1",
    name: "IronForge CrossFit",
    type: "CrossFit",
    location: "Berlin Mitte",
    description: "Berlin's premier CrossFit box, known for elite coaching and a dedicated community of 340 athletes across all fitness levels.",
    tokenPrice: 50,
    totalTokens: 800,
    soldTokens: 520,
    investors: 41,
    members: 340,
    daysLeft: 22,
    monthlyRevenue: 28000,
    avgMemberFee: 89,
    riskScore: 2,
    estimatedYield: 13,
    occupancy: 82,
    riskBreakdown: [
      { criterion: "Membership Retention", score: 1, label: "92% monthly retention — CrossFit community loyalty" },
      { criterion: "Revenue Consistency", score: 2, label: "Stable memberships, slight seasonal variation" },
      { criterion: "Location", score: 1, label: "Mitte — high density, premium catchment" },
      { criterion: "Market Competition", score: 2, label: "Growing boutique fitness market, differentiated" },
      { criterion: "Operator Experience", score: 2, label: "7 years operating, Level 3 certified coaches" },
      { criterion: "Lease Security", score: 2, label: "5-year lease signed, 2 renewal options" },
    ],
    features: ["Olympic lifting platform", "Rogue Fitness equipment", "24/7 access", "Cold plunge & sauna", "Nutrition coaching", "On-site physio Fridays"],
    expansionPlan: "Investment funds a second Berlin location (Prenzlauer Berg), additional equipment, and Level 4 coaching certifications. Target opening Q3 2027.",
    team: [
      { name: "Marco Bauer", role: "Head Coach & Founder", bio: "CrossFit Games athlete, Level 3 coach. Founded IronForge in 2017 after competing at Regionals. Built membership from 0 to 340 in 7 years.", initials: "MB", color: "#8B5CF6" },
      { name: "Jana Richter", role: "Operations Manager", bio: "Former sports science PhD turned gym operator. Manages class scheduling, coaching staff, and member experience for all 340 members.", initials: "JR", color: "#B8954F" },
    ],
    faqs: [
      { q: "How do I book classes as a token holder?", a: "Gold and Platinum holders get free access via the Kryptondo app. Bronze and Silver holders access discounts through the same app. Priority booking opens 72 hours before class for Silver+ holders." },
      { q: "What if class capacity fills before I can book?", a: "Silver+ holders get 72-hour priority booking windows. Gold+ holders have reserved spots in peak-time classes. Platinum holders can request a dedicated 1-on-1 session at any time." },
      { q: "How are dividends calculated?", a: "Monthly net profit after operating costs, lease, and coaching wages is distributed proportionally to all token holders. In 2025, IronForge generated €7.2K in average monthly profit." },
    ],
  },
  {
    id: "fit2",
    name: "ZenFlow Yoga",
    type: "Yoga & Pilates",
    location: "Munich Schwabing",
    description: "A premium yoga and pilates studio in Munich's most wellness-conscious neighbourhood, serving 280 members across 24 weekly classes.",
    tokenPrice: 40,
    totalTokens: 600,
    soldTokens: 450,
    investors: 38,
    members: 280,
    daysLeft: 31,
    monthlyRevenue: 22000,
    avgMemberFee: 79,
    riskScore: 2,
    estimatedYield: 11,
    occupancy: 75,
    riskBreakdown: [
      { criterion: "Membership Retention", score: 1, label: "95% — highest in portfolio, yoga community bonds" },
      { criterion: "Revenue Consistency", score: 1, label: "Highly predictable — memberships + workshop revenue" },
      { criterion: "Location", score: 1, label: "Schwabing — affluent, wellness-oriented demographic" },
      { criterion: "Market Competition", score: 2, label: "Multiple yoga studios nearby, strong differentiation" },
      { criterion: "Operator Experience", score: 2, label: "5 years, certified RYT-500 instructors" },
      { criterion: "Lease Security", score: 3, label: "3-year lease, renewal under negotiation" },
    ],
    features: ["Heated yoga rooms", "Pilates reformer suite (12 machines)", "Meditation room", "Infrared sauna", "Organic herbal bar", "Rooftop terrace sessions (summer)"],
    expansionPlan: "Funds will expand the pilates reformer suite from 12 to 20 machines and add a dedicated meditation & breathwork room. Expected revenue uplift of 18%.",
    team: [
      { name: "Sophie Müller", role: "Founder & Lead Instructor", bio: "RYT-500 certified, trained in Mysore India and Bali. Founded ZenFlow after 12 years teaching across Europe. Specialises in Ashtanga and Yin.", initials: "SM", color: "#8B5CF6" },
      { name: "Erik Hoffmann", role: "Studio Director", bio: "Former hospitality manager who handles all studio operations, booking systems, and member communications. Brought occupancy from 55% to 75% in 18 months.", initials: "EH", color: "#4A7C59" },
    ],
    faqs: [
      { q: "Can I attend any class or are some restricted?", a: "All regular classes are open to members. Advanced Mysore sessions require at least Silver tier status (Free Membership). Specialty workshops and teacher training events are open to Gold+ holders first." },
      { q: "Are pilates reformer sessions included in the membership perks?", a: "Yes — reformer sessions are included in the Free Membership perk (Silver+). Bronze holders receive 30% discount on reformer bookings." },
      { q: "How predictable is ZenFlow's revenue?", a: "ZenFlow runs on an 83% annual membership model with low churn. Monthly revenue variance is under 8% year-round — one of the most stable studios in the portfolio." },
    ],
  },
  {
    id: "fit3",
    name: "PeakPerformance Gym",
    type: "Premium Gym",
    location: "Hamburg HafenCity",
    description: "A 1,200 sqm premium gym in Hamburg's newest waterfront district, targeting professionals and corporate wellness with 520 members.",
    tokenPrice: 75,
    totalTokens: 1000,
    soldTokens: 300,
    investors: 24,
    members: 520,
    daysLeft: 48,
    monthlyRevenue: 45000,
    avgMemberFee: 99,
    riskScore: 3,
    estimatedYield: 15,
    occupancy: 70,
    riskBreakdown: [
      { criterion: "Membership Retention", score: 2, label: "84% — strong but improving, newer facility" },
      { criterion: "Revenue Consistency", score: 2, label: "Premium segment resilient but higher CAC" },
      { criterion: "Location", score: 2, label: "HafenCity — growing district, lower foot traffic now" },
      { criterion: "Market Competition", score: 3, label: "Competing with McFit, Holmes Place in Hamburg" },
      { criterion: "Operator Experience", score: 3, label: "2-year-old gym, strong growth trajectory" },
      { criterion: "Lease Security", score: 3, label: "Long lease at premium location — higher fixed cost" },
    ],
    features: ["1,200 sqm floor space", "Technogym equipment fleet", "Corporate wellness packages", "Recovery zone (cryotherapy, compression)", "Sports nutrition bar", "Premium changing suites", "Parking for members"],
    expansionPlan: "Investment funds a dedicated functional training zone, expansion of the recovery suite, and a corporate wellness B2B sales team. Targeting 20 corporate clients by end 2026.",
    team: [
      { name: "Thomas Lehmann", role: "CEO & Founder", bio: "Ex-McKinsey consultant turned fitness entrepreneur. Identified the HafenCity gap after 15 years in corporate health consulting.", initials: "TL", color: "#8B5CF6" },
      { name: "Dr. Lisa Braun", role: "Head of Performance", bio: "Exercise physiologist with a PhD from Hamburg Sport University. Leads the corporate wellness programme and personalised training plans.", initials: "LB", color: "#C4663A" },
      { name: "Kai Werner", role: "Head of Sales", bio: "Former Holmes Place Regional Director. Built the corporate wellness pipeline from 0 to 8 clients in 18 months.", initials: "KW", color: "#B8954F" },
    ],
    faqs: [
      { q: "Why is PeakPerformance's yield higher than other studios?", a: "Premium gyms carry higher revenue per member (€99 avg vs €79-89 elsewhere). The 70% current occupancy leaves significant upside — reaching 85% occupancy would increase monthly revenue by €6,750, directly boosting dividends." },
      { q: "What is the corporate wellness opportunity?", a: "Currently 8 corporate clients representing 120 memberships. Each corporate contract guarantees 12-month minimum commitments, creating stable recurring revenue above and beyond individual memberships." },
      { q: "Is there significant construction risk with the expansion zone?", a: "The functional training zone expansion uses existing floor space — no structural changes. Timeline risk is low. The main investment risk is new equipment delivery lead times (8–10 weeks)." },
    ],
  },
  {
    id: "fit4",
    name: "SprintCycle Studio",
    type: "Boutique Cycling",
    location: "Frankfurt Westend",
    description: "Frankfurt's highest-rated indoor cycling studio. 200 dedicated members, 88% room occupancy — the fastest-growing boutique fitness concept in the city.",
    tokenPrice: 60,
    totalTokens: 500,
    soldTokens: 480,
    investors: 52,
    members: 200,
    daysLeft: 6,
    monthlyRevenue: 18000,
    avgMemberFee: 109,
    riskScore: 3,
    estimatedYield: 14,
    occupancy: 88,
    riskBreakdown: [
      { criterion: "Membership Retention", score: 2, label: "88% — strong, boutique cycling loyalty high" },
      { criterion: "Revenue Consistency", score: 2, label: "High occupancy but smaller member base" },
      { criterion: "Location", score: 1, label: "Westend — Frankfurt's most affluent district" },
      { criterion: "Market Competition", score: 3, label: "Boutique cycling emerging, SoulCycle expansion risk" },
      { criterion: "Operator Experience", score: 3, label: "3 years, scaling from 80 to 200 members rapidly" },
      { criterion: "Lease Security", score: 3, label: "Up for renewal Q2 2027 — landlord negotiation risk" },
    ],
    features: ["45 Stages SC3 bikes", "Immersive light & sound system", "Cleats loan programme", "Post-ride protein bar", "Live performance metrics", "Heart rate tracking integration"],
    expansionPlan: "Near-fully funded. Proceeds fund a second Frankfurt location (Sachsenhausen), 45 additional bikes, and a digital membership tier with live-streamed rides.",
    team: [
      { name: "Alina Novak", role: "Founder & Head Instructor", bio: "Former professional cyclist turned boutique fitness entrepreneur. Created the SprintCycle method, blending performance cycling with music and community.", initials: "AN", color: "#8B5CF6" },
      { name: "Felix Roth", role: "Co-Founder & Operations", bio: "Operations expert from the hospitality sector. Manages all logistics, tech integration, and the second-location expansion project.", initials: "FR", color: "#B8954F" },
    ],
    faqs: [
      { q: "Why is SprintCycle nearly fully funded?", a: "SprintCycle launched 6 weeks ago with 52 investors — the fastest-filling studio campaign on Kryptondo. High occupancy and strong community following drove demand. Only 6 days remain." },
      { q: "What happens if I invest and the second location fails to open?", a: "The existing studio is already profitable and self-sustaining at current revenue. The second location is an expansion, not a lifeline — existing studio dividends continue regardless." },
      { q: "Is the lease renewal risk manageable?", a: "Lease renewal is Q2 2027. The current landlord has verbally committed to renewal and SprintCycle is the anchor tenant. As a risk factor it is real but rated low-probability." },
    ],
  },
];

export const FITNESS_FAQS = [
  { q: "How do I access my membership perks as a token holder?", a: "Connect your wallet to the Kryptondo app. Your token balance automatically unlocks your tier. Present a QR code at the studio reception or use the app's booking system to reserve classes and sessions." },
  { q: "What are the perk tiers and what do I need to invest?", a: "Bronze (€100–499): 20% off membership + priority booking. Silver (€500–1,999): Free membership + 2 PT sessions/month. Gold (€2,000–4,999): Free membership + unlimited PT + VIP lounge. Platinum (€5,000+): All above + voting rights + exclusive events." },
  { q: "How often are dividends paid?", a: "Monthly, directly to your wallet. Dividends are calculated from net profit after operating costs. The smart contract distributes automatically — no action needed." },
  { q: "What if the studio closes or goes bankrupt?", a: "The Malta SPV holds equity in the studio business. In a closure, SPV assets (equipment, lease, goodwill) would be liquidated and proceeds distributed proportionally to token holders. Fitness assets typically recover 40–60 cents on the euro." },
  { q: "Can I invest in multiple studios and combine perks?", a: "Yes. Each studio investment grants perks at that studio independently. Invest €200 in Studio A and €300 in Studio B — you get Bronze perks at both. Token balances are not combined across different studios." },
  { q: "Do I need to use my perks, or can I just earn dividends?", a: "Perks are optional. If you never visit the studio, your dividends continue normally. The perks are a bonus — not a requirement for earning returns." },
  { q: "Who manages the studio day-to-day?", a: "The studio operators (founders and management team) continue running all day-to-day operations. Token holders do not participate in daily management. Platinum holders vote on major strategic decisions only." },
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

// ─── EV Charging Station Types ──────────────────────────────────────────────

export interface EVChargingStation {
  id: string;
  name: string;
  location: string;
  locationType: string;
  description: string;
  chargerCount: number;
  chargerType: string;
  powerOutputKW: number;
  tokenPrice: number;
  totalTokens: number;
  soldTokens: number;
  investors: number;
  daysLeft: number;
  monthlyRevenuePerCharger: number;
  utilization: number;
  estimatedYield: number;
  riskScore: number;
  riskBreakdown: RiskBreakdown[];
  features: string[];
  chain: string;
  contractAddress: string;
  spvName: string;
  team: { name: string; role: string; bio: string; initials: string; color: string }[];
  faqs: { q: string; a: string }[];
}

// ─── EV Charging Station Data ───────────────────────────────────────────────

export const EV_CHARGING_STATIONS: EVChargingStation[] = [
  {
    id: "ev1",
    name: "ChargeHub Berlin",
    location: "Berlin A10 Highway",
    locationType: "Highway Rest Stop",
    description: "20 DC fast chargers at a high-traffic rest stop on Berlin's A10 ring motorway. 85% average utilization — one of the highest in Germany.",
    chargerCount: 20,
    chargerType: "DC Fast Charger",
    powerOutputKW: 150,
    tokenPrice: 75,
    totalTokens: 2000,
    soldTokens: 1400,
    investors: 62,
    daysLeft: 18,
    monthlyRevenuePerCharger: 650,
    utilization: 85,
    estimatedYield: 12,
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Location Quality", score: 1, label: "A10 rest stop — top-traffic corridor" },
      { criterion: "Utilization Rate", score: 1, label: "85% — exceptional for EV charging" },
      { criterion: "Technology Risk", score: 2, label: "150kW CCS2 — current standard" },
      { criterion: "Regulatory Support", score: 1, label: "German federal charging subsidies active" },
      { criterion: "Revenue Consistency", score: 2, label: "Stable traffic corridor" },
      { criterion: "Maintenance Risk", score: 2, label: "Service contract with ABB" },
    ],
    features: ["150kW DC fast charging (CCS2)", "24/7 operation", "Covered canopy", "Real-time availability app", "Payment via app, card, or RFID", "ABB Terra 184 chargers"],
    chain: "Arbitrum",
    contractAddress: "0xEV01...chargehub",
    spvName: "ChargeHub Infrastructure SPV (Malta) Ltd.",
    team: [
      { name: "Klaus Richter", role: "CEO", bio: "Former E.ON infrastructure director. 15 years building energy networks across Germany. Led deployment of 200+ charging stations.", initials: "KR", color: "#0EA5E9" },
      { name: "Ingrid Svensson", role: "COO", bio: "Supply chain and construction specialist from Vattenfall. Manages all site development and charger procurement.", initials: "IS", color: "#B8954F" },
    ],
    faqs: [
      { q: "How is revenue calculated per charger?", a: "Revenue = sessions per day × average kWh per session × price per kWh. At 85% utilization, each charger averages 14 sessions/day at €0.45/kWh, generating approximately €650/month." },
      { q: "What happens during maintenance downtime?", a: "ABB service contracts guarantee 98% uptime. Revenue projections already account for 2% scheduled maintenance. Emergency repairs are covered within 24 hours." },
      { q: "What if EV adoption slows?", a: "EU regulation mandates 3.5M public chargers by 2030. Even conservative scenarios project 2× current EV registrations by 2028. Highway locations are the least sensitive to adoption speed." },
      { q: "Is the site owned or leased?", a: "20-year ground lease with the highway rest stop operator, indexed to inflation. Lease costs are fixed and factored into revenue projections." },
    ],
  },
  {
    id: "ev2",
    name: "VoltPoint Munich",
    location: "Munich Pasing",
    locationType: "Shopping Center",
    description: "12 chargers at Munich's busiest shopping center. Shoppers charge while they browse — high dwell time drives high utilization.",
    chargerCount: 12,
    chargerType: "DC Fast Charger",
    powerOutputKW: 100,
    tokenPrice: 75,
    totalTokens: 1200,
    soldTokens: 720,
    investors: 38,
    daysLeft: 28,
    monthlyRevenuePerCharger: 480,
    utilization: 72,
    estimatedYield: 10,
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Location Quality", score: 1, label: "Top-5 Munich shopping center" },
      { criterion: "Utilization Rate", score: 2, label: "72% — strong for retail location" },
      { criterion: "Technology Risk", score: 2, label: "100kW — suitable for 1-2hr shopping sessions" },
      { criterion: "Regulatory Support", score: 1, label: "Bavaria state EV incentives" },
      { criterion: "Revenue Consistency", score: 2, label: "Retail foot traffic stable year-round" },
      { criterion: "Maintenance Risk", score: 2, label: "Managed by center facilities team" },
    ],
    features: ["100kW DC fast charging", "Underground parking integration", "Automated billing via app", "Contactless card payment", "Real-time slot reservation", "LED-lit charging bays"],
    chain: "Base",
    contractAddress: "0xEV02...voltpoint",
    spvName: "VoltPoint Energy SPV (Malta) Ltd.",
    team: [
      { name: "Martin Gruber", role: "CEO", bio: "Ex-Siemens energy division. Built 3 charging networks for retail partners across Bavaria.", initials: "MG", color: "#0EA5E9" },
      { name: "Eva Schneider", role: "Head of Partnerships", bio: "10 years in commercial real estate. Manages all shopping center and landlord relationships.", initials: "ES", color: "#4A7C59" },
    ],
    faqs: [
      { q: "How does the shopping center partnership work?", a: "Revenue-sharing agreement: 80% to SPV investors, 20% to the shopping center. The center benefits from increased foot traffic from EV drivers." },
      { q: "What are peak utilization times?", a: "Saturdays and weekday evenings (17:00–21:00) see 90%+ utilization. Average across the week is 72%." },
      { q: "Are there expansion plans?", a: "Yes — the shopping center has pre-approved 8 additional bays for Phase 2, contingent on Phase 1 reaching 75% utilization for 6 months." },
      { q: "What if the shopping center closes or changes ownership?", a: "The charging license is a 15-year independent agreement registered on the property title. It survives ownership changes." },
    ],
  },
  {
    id: "ev3",
    name: "ElektroPark Hamburg",
    location: "Hamburg Logistics Hub",
    locationType: "Logistics Hub",
    description: "30 chargers serving electric delivery fleets at Hamburg's largest logistics park. B2B contracts guarantee 90% minimum utilization.",
    chargerCount: 30,
    chargerType: "DC Fast Charger",
    powerOutputKW: 180,
    tokenPrice: 100,
    totalTokens: 2200,
    soldTokens: 880,
    investors: 44,
    daysLeft: 35,
    monthlyRevenuePerCharger: 720,
    utilization: 90,
    estimatedYield: 14,
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Location Quality", score: 1, label: "Hamburg's #1 logistics park" },
      { criterion: "Utilization Rate", score: 1, label: "90% — B2B contracts guarantee minimum" },
      { criterion: "Technology Risk", score: 2, label: "180kW — commercial fleet standard" },
      { criterion: "Regulatory Support", score: 1, label: "Federal + Hamburg fleet electrification subsidies" },
      { criterion: "Revenue Consistency", score: 1, label: "Corporate contracts with guaranteed minimums" },
      { criterion: "Maintenance Risk", score: 2, label: "24/7 on-site technician" },
    ],
    features: ["180kW DC charging (CCS2 + CHAdeMO)", "Fleet management dashboard", "24/7 on-site technician", "B2B billing integration", "Load balancing system", "Expandable to 50 chargers"],
    chain: "Arbitrum",
    contractAddress: "0xEV03...elektropark",
    spvName: "ElektroPark Infra SPV (Malta) Ltd.",
    team: [
      { name: "Jens Petersen", role: "CEO", bio: "Built Hamburg's first commercial EV fleet charging network. Former logistics director at Hermes Germany.", initials: "JP", color: "#0EA5E9" },
      { name: "Annika Wulf", role: "CTO", bio: "Electrical engineer, specialist in grid-scale energy management and load balancing for commercial EV fleets.", initials: "AW", color: "#C4663A" },
      { name: "Tomasz Kowalski", role: "Head of Fleet Sales", bio: "B2B energy sales veteran. Signed contracts with DHL, Amazon Logistics, and 3 regional courier services.", initials: "TK", color: "#B8954F" },
    ],
    faqs: [
      { q: "How do the B2B contracts work?", a: "Fleet operators sign 3-year minimum-use agreements: they guarantee a minimum number of charging sessions per month, or pay a base fee. This protects investors from utilization risk." },
      { q: "What fleets use ElektroPark?", a: "DHL electric vans, Amazon Logistics, Hermes, and 3 regional courier services. Combined fleet of 200+ electric vehicles based at the logistics park." },
      { q: "Is there grid capacity for expansion?", a: "Yes — the site has a 2MW grid connection with current load at 1.2MW. Expansion to 50 chargers is technically feasible without grid upgrade." },
      { q: "What if a fleet operator switches to a competitor?", a: "3-year lock-in with 12-month early termination penalty. Even without the largest client, remaining contracts cover 65% of charger capacity." },
    ],
  },
  {
    id: "ev4",
    name: "GreenCharge Vienna",
    location: "Vienna Innere Stadt",
    locationType: "City Center",
    description: "8 ultra-fast 350kW chargers in Vienna's first district. Premium pricing for rapid top-ups in the heart of the city.",
    chargerCount: 8,
    chargerType: "Ultra-Fast Charger",
    powerOutputKW: 350,
    tokenPrice: 100,
    totalTokens: 1200,
    soldTokens: 360,
    investors: 22,
    daysLeft: 42,
    monthlyRevenuePerCharger: 800,
    utilization: 68,
    estimatedYield: 11,
    riskScore: 3,
    riskBreakdown: [
      { criterion: "Location Quality", score: 1, label: "Vienna 1st district — premium location" },
      { criterion: "Utilization Rate", score: 3, label: "68% — growing as EV adoption increases" },
      { criterion: "Technology Risk", score: 2, label: "350kW — future-proof for next-gen EVs" },
      { criterion: "Regulatory Support", score: 2, label: "Austrian federal and Vienna city subsidies" },
      { criterion: "Revenue Consistency", score: 3, label: "City center utilization still maturing" },
      { criterion: "Maintenance Risk", score: 2, label: "Tritium service agreement" },
    ],
    features: ["350kW ultra-fast charging (CCS2)", "10-minute to 80% charge", "Premium city-center location", "Contactless payment", "Dynamic pricing (peak/off-peak)", "Tritium PKM 350 chargers"],
    chain: "Base",
    contractAddress: "0xEV04...greencharge",
    spvName: "GreenCharge Austria SPV (Malta) Ltd.",
    team: [
      { name: "Lukas Huber", role: "CEO", bio: "Austrian energy entrepreneur. Previously built and sold a 50-station charging network in Tyrol.", initials: "LH", color: "#0EA5E9" },
      { name: "Sophie Bauer", role: "Head of Operations", bio: "Urban infrastructure specialist from Wien Energie. Manages all city permits and grid connections.", initials: "SB", color: "#B8954F" },
    ],
    faqs: [
      { q: "Why 350kW chargers in a city center?", a: "City center users need fast top-ups — 10 minutes for 80% charge. Premium speed commands premium pricing (€0.55/kWh vs €0.45/kWh at highway stations). As more 800V EVs arrive, these chargers are perfectly positioned." },
      { q: "What is the dynamic pricing model?", a: "Peak hours (8am–8pm weekdays): €0.55/kWh. Off-peak: €0.40/kWh. This optimizes revenue during high-demand periods and attracts users during quieter times." },
      { q: "Is 68% utilization enough to be profitable?", a: "Yes — premium pricing at €0.55/kWh means each charger generates €800/month even at 68%. As Vienna's EV fleet grows (currently 15% annual growth), utilization is projected to reach 80% by 2028." },
      { q: "What about competition from Tesla Superchargers?", a: "Tesla Superchargers serve Tesla vehicles only (opening slowly to others). Our CCS2 chargers serve all European EVs. Vienna's 1st district has zero other ultra-fast public chargers." },
    ],
  },
];

export const EV_CHARGING_FAQS = [
  { q: "How is revenue calculated?", a: "Revenue = charging sessions × kWh consumed × price per kWh. Each charger tracks usage via smart meters. Monthly revenue is distributed proportionally to all token holders after operating costs (electricity, maintenance, site lease)." },
  { q: "What are typical operating costs?", a: "Electricity (55-65% of revenue), site lease (10-15%), maintenance (5-8%), insurance (2-3%), and management fee (5%). Net margins typically range 15-25% depending on utilization." },
  { q: "Who maintains the chargers?", a: "Each station has a manufacturer service contract (ABB, Tritium, etc.) guaranteeing 98%+ uptime. Kryptondo's infrastructure team monitors all stations 24/7 via remote management." },
  { q: "What if EV adoption slows down?", a: "EU regulation mandates 3.5M public chargers by 2030 (currently ~600k). Government subsidies protect early infrastructure investments. Highway and logistics locations are least sensitive to adoption speed variations." },
  { q: "How often are dividends paid?", a: "Monthly, based on the previous month's net charging revenue. Smart contracts distribute automatically to all token holders on the 1st of each month." },
  { q: "What is the asset lifespan?", a: "Commercial EV chargers have a 15-20 year operational life. Technology upgrades (e.g., power output increases) can extend commercial viability further. The site leases match or exceed equipment life." },
];

// ─── Solar Project Types ────────────────────────────────────────────────────

export interface SolarProject {
  id: string;
  name: string;
  location: string;
  description: string;
  roofSizeM2: number;
  capacityKWp: number;
  annualProductionKWh: number;
  tokenPrice: number;
  totalTokens: number;
  soldTokens: number;
  investors: number;
  daysLeft: number;
  investorYield: number;
  contributorYield: number;
  feedInTariffCentsKWh: number;
  riskScore: number;
  riskBreakdown: RiskBreakdown[];
  isContributed: boolean;
  contributorName: string | null;
  roofType: string;
  orientation: string;
  features: string[];
  chain: string;
  contractAddress: string;
  spvName: string;
  team: { name: string; role: string; bio: string; initials: string; color: string }[];
  faqs: { q: string; a: string }[];
}

// ─── Solar Project Data ─────────────────────────────────────────────────────

export const SOLAR_PROJECTS: SolarProject[] = [
  {
    id: "sol1",
    name: "SolarDach Berlin-Kreuzberg",
    location: "Berlin Kreuzberg",
    description: "450m² warehouse rooftop in Kreuzberg — contributed by the building owner. 85kWp system projected to produce 78,000 kWh/year.",
    roofSizeM2: 450,
    capacityKWp: 85,
    annualProductionKWh: 78000,
    tokenPrice: 50,
    totalTokens: 1900,
    soldTokens: 1330,
    investors: 58,
    daysLeft: 16,
    investorYield: 9,
    contributorYield: 14,
    feedInTariffCentsKWh: 8.2,
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Solar Resource", score: 2, label: "Berlin avg 1,050 kWh/kWp — moderate" },
      { criterion: "Roof Condition", score: 1, label: "Professional assessment passed — 30yr life" },
      { criterion: "Grid Connection", score: 1, label: "Direct feed-in approved by Stromnetz Berlin" },
      { criterion: "Regulatory Stability", score: 1, label: "German EEG guarantees 20yr feed-in tariff" },
      { criterion: "Technology Risk", score: 2, label: "Tier-1 panels — 25yr performance warranty" },
      { criterion: "Counterparty Risk", score: 2, label: "Building owner committed for 20yr lease" },
    ],
    isContributed: true,
    contributorName: "Hans Mueller",
    roofType: "Flat",
    orientation: "South-facing (10° tilt)",
    features: ["JA Solar 540W panels", "Huawei SUN2000 inverters", "Remote monitoring system", "Anti-theft mounting rails", "Lightning protection", "20-year EEG feed-in guarantee"],
    chain: "Arbitrum",
    contractAddress: "0xSOL01...solardach",
    spvName: "SolarDach Berlin SPV (Malta) Ltd.",
    team: [
      { name: "Andreas Berger", role: "CEO", bio: "Solar industry veteran, 12 years at SMA Solar. Has developed 50+ commercial rooftop installations totaling 8MW.", initials: "AB", color: "#F59E0B" },
      { name: "Nina Krause", role: "Head of Engineering", bio: "Structural engineer specialising in rooftop solar. Certified PV installer with 200+ roof assessments completed.", initials: "NK", color: "#4A7C59" },
    ],
    faqs: [
      { q: "Who is the rooftop contributor?", a: "Hans Mueller, owner of a commercial warehouse in Kreuzberg. He contributes his roof in exchange for a contributor bonus (higher yield) and reduced electricity costs for his building." },
      { q: "What does the contributor earn?", a: "Contributors earn 30-50% more than pure financial investors. Hans receives the standard investor yield plus a contribution bonus for providing the roof space, plus direct savings on his warehouse electricity." },
      { q: "How long is the EEG feed-in tariff guaranteed?", a: "20 years from installation date, guaranteed by German federal law (Erneuerbare-Energien-Gesetz). The current rate for new installations is 8.2 cents/kWh." },
      { q: "What if the building is sold?", a: "The solar lease is registered on the property title and runs for 20 years. It survives any change of building ownership." },
    ],
  },
  {
    id: "sol2",
    name: "SunPower Frankfurt",
    location: "Frankfurt Osthafen",
    description: "800m² logistics center roof in Frankfurt's industrial east. 160kWp system — one of the largest commercial rooftop installations on Kryptondo.",
    roofSizeM2: 800,
    capacityKWp: 160,
    annualProductionKWh: 152000,
    tokenPrice: 75,
    totalTokens: 2400,
    soldTokens: 960,
    investors: 42,
    daysLeft: 30,
    investorYield: 10,
    contributorYield: 0,
    feedInTariffCentsKWh: 8.2,
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Solar Resource", score: 2, label: "Frankfurt avg 1,080 kWh/kWp — moderate-good" },
      { criterion: "Roof Condition", score: 1, label: "New roof (2022) — excellent condition" },
      { criterion: "Grid Connection", score: 1, label: "3-phase 400A connection — no upgrade needed" },
      { criterion: "Regulatory Stability", score: 1, label: "EEG 20yr guarantee + corporate PPA option" },
      { criterion: "Technology Risk", score: 2, label: "Canadian Solar BiHiKu — bankable tier-1" },
      { criterion: "Counterparty Risk", score: 2, label: "Logistics company on 15yr lease" },
    ],
    isContributed: false,
    contributorName: null,
    roofType: "Flat",
    orientation: "East-West split (optimal for all-day generation)",
    features: ["Canadian Solar 580W bifacial panels", "SMA Sunny Tripower inverters", "Battery-ready design", "Energy management system", "Bird deterrent netting", "Hail-resistant panels (IEC 61215)"],
    chain: "Base",
    contractAddress: "0xSOL02...sunpower",
    spvName: "SunPower Frankfurt SPV (Malta) Ltd.",
    team: [
      { name: "Dr. Marco Fischer", role: "CEO", bio: "PhD in photovoltaic engineering from TU Darmstadt. Previously led Hanwha Q Cells' commercial division for DACH.", initials: "MF", color: "#F59E0B" },
      { name: "Julia Hartmann", role: "Head of Finance", bio: "Solar project finance specialist. Has structured €50M+ in renewable energy investments across Germany.", initials: "JH", color: "#B8954F" },
      { name: "Kemal Yilmaz", role: "Installation Director", bio: "Master electrician with 300+ solar installations. Manages all procurement, installation, and commissioning.", initials: "KY", color: "#C4663A" },
    ],
    faqs: [
      { q: "Why is this one of the highest-yield solar projects?", a: "Scale: 160kWp spreads fixed costs across more panels. Frankfurt's excellent grid infrastructure avoids curtailment. East-West orientation generates more consistent all-day power than pure south-facing." },
      { q: "Is a corporate PPA possible?", a: "Yes — the logistics company tenant has expressed interest in a Power Purchase Agreement at €0.12/kWh for on-site consumption, which is 46% higher than the feed-in tariff. This would significantly boost investor returns." },
      { q: "What about battery storage?", a: "The system is battery-ready. If electricity prices spike or arbitrage opportunities emerge, battery storage can be added to shift production to peak pricing periods." },
      { q: "What happens after the 20-year EEG period?", a: "After 20 years, the panels still produce at ~85% original capacity. Revenue switches to market-rate electricity sales or PPA renewals. Panels have 25-30 year commercial lifespans." },
    ],
  },
  {
    id: "sol3",
    name: "AlpenSolar Innsbruck",
    location: "Innsbruck, Austria",
    description: "300m² hotel rooftop in the Tyrolean Alps. Contributed by Hotel Goldener Adler. Mountain altitude means exceptional solar irradiance and cooler panels = higher efficiency.",
    roofSizeM2: 300,
    capacityKWp: 60,
    annualProductionKWh: 66000,
    tokenPrice: 50,
    totalTokens: 1400,
    soldTokens: 840,
    investors: 36,
    daysLeft: 24,
    investorYield: 8,
    contributorYield: 12,
    feedInTariffCentsKWh: 7.67,
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Solar Resource", score: 1, label: "Alpine altitude — 1,200 kWh/kWp, above average" },
      { criterion: "Roof Condition", score: 2, label: "Pitched roof, professionally assessed" },
      { criterion: "Grid Connection", score: 2, label: "Austrian grid connection approved" },
      { criterion: "Regulatory Stability", score: 1, label: "Austrian OeMAG guarantees 13yr feed-in" },
      { criterion: "Technology Risk", score: 2, label: "LONGi Hi-MO 6 — top-tier panels" },
      { criterion: "Counterparty Risk", score: 1, label: "Hotel in operation since 1890 — family owned" },
    ],
    isContributed: true,
    contributorName: "Hotel Goldener Adler",
    roofType: "Pitched (35°)",
    orientation: "South-facing",
    features: ["LONGi Hi-MO 6 panels", "Fronius Symo GEN24 inverters", "Snow load rated (4.5kN/m²)", "Alpine wind-rated mounting", "On-site energy display for hotel guests", "Emergency backup power capability"],
    chain: "Arbitrum",
    contractAddress: "0xSOL03...alpensolar",
    spvName: "AlpenSolar Tyrol SPV (Malta) Ltd.",
    team: [
      { name: "Florian Mayer", role: "CEO", bio: "Tyrolean solar pioneer, built the first commercial PV installation in Innsbruck in 2014. Operates 2MW+ of alpine solar.", initials: "FM", color: "#F59E0B" },
      { name: "Maria Hofer", role: "Contributor Relations", bio: "Hospitality industry veteran. Manages rooftop contributor onboarding and building owner relationships across Austria.", initials: "MH", color: "#4A7C59" },
    ],
    faqs: [
      { q: "Why does altitude improve solar performance?", a: "Higher altitude = thinner atmosphere = more direct sunlight. Cooler temperatures also improve panel efficiency (panels lose ~0.3% efficiency per °C above 25°C). Innsbruck panels run 10-15°C cooler than lowland installations." },
      { q: "What does Hotel Goldener Adler get?", a: "The hotel gets free electricity from the system (reducing their €18,000/year energy bill), plus a contributor bonus on investment returns. The hotel also promotes the solar installation to eco-conscious guests." },
      { q: "How does Austrian feed-in compare to German?", a: "Austrian OeMAG guarantees are 13 years (vs 20 in Germany) at 7.67 cents/kWh. After 13 years, production is sold at market rates. Alpine production compensates for the shorter guarantee." },
      { q: "What about snow on the panels?", a: "35° pitch ensures natural snow shedding. Panels are rated for 4.5kN/m² snow load. Alpine installations typically lose <5% annual production to snow cover." },
    ],
  },
  {
    id: "sol4",
    name: "NordSonne Hamburg",
    location: "Hamburg Wilhelmsburg",
    description: "1,200m² industrial rooftop — the largest solar project on Kryptondo. 240kWp system powering Hamburg's energy transition.",
    roofSizeM2: 1200,
    capacityKWp: 240,
    annualProductionKWh: 216000,
    tokenPrice: 75,
    totalTokens: 3733,
    soldTokens: 1120,
    investors: 48,
    daysLeft: 42,
    investorYield: 11,
    contributorYield: 0,
    feedInTariffCentsKWh: 8.2,
    riskScore: 3,
    riskBreakdown: [
      { criterion: "Solar Resource", score: 3, label: "Hamburg avg 980 kWh/kWp — below national avg" },
      { criterion: "Roof Condition", score: 1, label: "Industrial steel roof, 2020 build" },
      { criterion: "Grid Connection", score: 1, label: "Industrial 630A connection — ample capacity" },
      { criterion: "Regulatory Stability", score: 1, label: "EEG 20yr guarantee" },
      { criterion: "Technology Risk", score: 2, label: "Trina Vertex S+ panels — bankable" },
      { criterion: "Counterparty Risk", score: 3, label: "Industrial tenant, 8yr remaining lease" },
    ],
    isContributed: false,
    contributorName: null,
    roofType: "Flat (steel deck)",
    orientation: "South-facing (ballasted 15° tilt)",
    features: ["Trina Vertex S+ 600W panels", "Huawei SUN2000-100KTL inverters", "400-unit panel array", "Industrial load management", "Aerial thermal monitoring", "Fire detection system"],
    chain: "Base",
    contractAddress: "0xSOL04...nordsonne",
    spvName: "NordSonne Hamburg SPV (Malta) Ltd.",
    team: [
      { name: "Henrik Lindqvist", role: "CEO", bio: "Swedish-German solar entrepreneur. Previously built 15MW of commercial solar in Scandinavia before focusing on Northern Germany.", initials: "HL", color: "#F59E0B" },
      { name: "Claudia Brandt", role: "Head of Operations", bio: "Renewable energy engineer from Hamburg Energie. 8 years operating utility-scale and commercial solar installations.", initials: "CB", color: "#C4663A" },
      { name: "Patrick Schulz", role: "CFO", bio: "Infrastructure finance background from Berenberg Bank. Structured €120M+ in renewable energy project finance.", initials: "PS", color: "#B8954F" },
    ],
    faqs: [
      { q: "Hamburg gets less sun — is this still profitable?", a: "Yes. Lower irradiance is compensated by lower land costs and strong local demand. Hamburg's industrial electricity prices are among Germany's highest, making on-site consumption (PPA) extremely attractive." },
      { q: "What if the industrial tenant leaves?", a: "The solar lease is independent of the tenant lease. If the tenant changes, the new tenant inherits the electricity supply arrangement. The roof lease is with the building owner, not the tenant." },
      { q: "Why is this the largest project on Kryptondo?", a: "1,200m² industrial roofs are rare — most commercial rooftops are 200-500m². Scale reduces per-kWp installation costs by 20-30%, improving investor returns despite lower Hamburg irradiance." },
      { q: "Is there potential for a battery addition?", a: "The system design includes pre-wiring for a 100kWh battery. This would be funded as a Phase 2 investment if peak-shaving proves economically viable." },
    ],
  },
];

// ─── Party & Club ─────────────────────────────────────────────────────────────

export interface PartyClub {
  id: string;
  name: string;
  type: string; // "Techno Club" | "Rooftop Lounge" | "Event Collective" | "Beach Club"
  location: string;
  description: string;
  tokenPrice: number;
  totalTokens: number;
  soldTokens: number;
  investors: number;
  daysLeft: number;
  estimatedYield: number;  // % annual
  ticketRevenueMonthly: number;  // € monthly avg
  capacityPax: number;
  eventsPerMonth: number;
  riskScore: number;
  riskBreakdown: RiskBreakdown[];
  features: string[];
  upcomingEvents: { name: string; date: string; tickets: number; soldOut: boolean }[];
  team: { name: string; role: string; bio: string; initials: string; color: string }[];
  faqs: { q: string; a: string }[];
}

export const PARTY_CLUBS: PartyClub[] = [
  {
    id: "party1",
    name: "Neon Vault",
    type: "Techno Club",
    location: "Berlin Friedrichshain",
    description: "Berlin's underground techno institution. Three rooms, 1,200-pax capacity, and a curated lineup of international artists. Invest and become a co-promoter.",
    tokenPrice: 50,
    totalTokens: 2000,
    soldTokens: 1380,
    investors: 67,
    daysLeft: 19,
    estimatedYield: 18,
    ticketRevenueMonthly: 148000,
    capacityPax: 1200,
    eventsPerMonth: 12,
    riskScore: 3,
    riskBreakdown: [
      { criterion: "Venue Footfall", score: 2, label: "Avg 85% capacity fill, strong Berlin demand" },
      { criterion: "Revenue Consistency", score: 3, label: "Event-dependent, seasonal variation" },
      { criterion: "Licensing & Compliance", score: 2, label: "Full BVG entertainment license, noise compliance" },
      { criterion: "Market Competition", score: 3, label: "Competitive Berlin club scene — differentiated by curation" },
      { criterion: "Operator Experience", score: 2, label: "8 years operating, 4 booking agents" },
      { criterion: "Lease Security", score: 3, label: "5-year lease, 2 years remaining before renewal" },
    ],
    features: ["3 rooms (600 / 400 / 200 pax)", "d&b audiotechnik line arrays", "Funktion-One main room system", "Full LED & laser rig", "Artist hospitality suite", "Outdoor smoking terrace", "Self-service bar x4", "VIP mezzanine balcony"],
    upcomingEvents: [
      { name: "Vault Marathon — 24h Opening Party", date: "May 31, 2026", tickets: 1200, soldOut: true },
      { name: "Nina Kraviz b2b DJ Stingray", date: "Jun 7, 2026", tickets: 900, soldOut: false },
      { name: "Vault x Tresor Kollektiv", date: "Jun 14, 2026", tickets: 1100, soldOut: false },
      { name: "Resident Night — All Local", date: "Jun 21, 2026", tickets: 800, soldOut: false },
    ],
    team: [
      { name: "Florian Krueger", role: "Founder & Booker", bio: "Former Berghain resident booker. 12 years in Berlin techno. Founded Neon Vault in 2018 after Berghain residency ended. Books 95% of international acts personally.", initials: "FK", color: "#E879F9" },
      { name: "Sara Mück", role: "Operations Director", bio: "Event operations veteran from Lollapalooza Berlin. Manages venue staffing (80+ freelancers per event), bar ops, and safety coordination.", initials: "SM", color: "#B8954F" },
      { name: "Tobias Lang", role: "Finance & SPV Manager", bio: "CPA, 6 years in entertainment finance. Structures revenue-sharing agreements and manages the Malta SPV accounting for investor distributions.", initials: "TL", color: "#4A7C59" },
    ],
    faqs: [
      { q: "How are dividends calculated?", a: "Token holders receive a proportional share of net ticket revenue after operating costs (staff, artist fees, bar costs, licensing). Smart contracts distribute monthly based on audited revenue reports." },
      { q: "Do I get free entry as a token holder?", a: "Yes — Bronze holders (€100+) get 2 free entries/month. Silver holders (€500+) get unlimited entry. Gold+ holders get VIP access including artist area and complimentary drinks." },
      { q: "What if a major event is cancelled?", a: "Force majeure events are covered by our event cancellation insurance. If revenue dips below projections for 2+ consecutive months, the SPV board (including investor representatives) reviews the lineup and cost structure." },
      { q: "Can I co-brand an event?", a: "Platinum holders (€5,000+) can apply to co-brand one event per quarter — your name/brand on the poster, social media, and at the entrance. The booking team curates the music; you get the credit." },
    ],
  },
  {
    id: "party2",
    name: "Skyline Terrace",
    type: "Rooftop Lounge",
    location: "Munich Maxvorstadt",
    description: "Munich's highest rooftop bar — 22nd floor, panoramic Alps views, 450-pax capacity. Premium cocktail events and corporate parties with €85 avg spend per guest.",
    tokenPrice: 75,
    totalTokens: 1400,
    soldTokens: 756,
    investors: 44,
    daysLeft: 35,
    estimatedYield: 14,
    ticketRevenueMonthly: 94000,
    capacityPax: 450,
    eventsPerMonth: 8,
    riskScore: 2,
    riskBreakdown: [
      { criterion: "Revenue Per Guest", score: 1, label: "€85 avg spend — premium positioning" },
      { criterion: "Seasonal Exposure", score: 3, label: "Weather-dependent, closed Jan-Feb" },
      { criterion: "Licensing & Compliance", score: 1, label: "Full entertainment license, fire safety certified" },
      { criterion: "Corporate Bookings", score: 1, label: "40% corporate events — predictable forward bookings" },
      { criterion: "Location", score: 1, label: "22nd floor, prime Munich location" },
      { criterion: "Operator Experience", score: 2, label: "5 years operating, 4.8/5 Google rating" },
    ],
    features: ["Panoramic 360° Alps view", "Open-air terrace (heated season)", "Private event rooms x2", "Signature cocktail menu", "4 full-service bars", "DJ booth & live music stage", "Catering kitchen on-site", "Elevator access (ADA compliant)"],
    upcomingEvents: [
      { name: "Rooftop Sunset Series — Opening Night", date: "May 30, 2026", tickets: 420, soldOut: true },
      { name: "Jazz & Cocktails Evening", date: "Jun 5, 2026", tickets: 300, soldOut: false },
      { name: "Corporate Private Hire — BMW Group", date: "Jun 12, 2026", tickets: 450, soldOut: true },
      { name: "Midsummer Celebration", date: "Jun 21, 2026", tickets: 450, soldOut: false },
    ],
    team: [
      { name: "Katarina Schulz", role: "Venue Director", bio: "Hospitality MBA from EHL Lausanne. Previously GM of a 5-star Munich hotel. Transformed Skyline Terrace from a corporate hire venue into Munich's top social events destination.", initials: "KS", color: "#E879F9" },
      { name: "Luca Fermi", role: "Events & Bookings Manager", bio: "10 years in premium event production across Munich, Vienna, and Milan. Manages all corporate bookings, artist curation, and catering partnerships.", initials: "LF", color: "#F59E0B" },
    ],
    faqs: [
      { q: "What happens in winter?", a: "The venue closes the outdoor terrace from December to February. Indoor events continue year-round in our heated event rooms. Winter revenue is approximately 35% of peak season — factored into yield projections." },
      { q: "How do corporate bookings work for investors?", a: "Corporate clients pay 20-40% above public event rates. As a token holder, you benefit proportionally from all revenue streams. Corporate bookings are fully confirmed before listing — reducing revenue uncertainty." },
      { q: "Can I host a private event?", a: "Silver+ holders (€500) can book private events at a 20% discount to public rates. Gold+ holders (€2,000) get one complimentary 50-person private event per year." },
      { q: "Is the rooftop weather-insured?", a: "Yes — we carry weather cancellation insurance for events above 200 guests. If rain forces cancellation, insurance covers 70% of lost ticket revenue. Investor returns are calculated on net insured revenue." },
    ],
  },
  {
    id: "party3",
    name: "Pulse Events",
    type: "Event Collective",
    location: "Hamburg Hafencity",
    description: "Hamburg's largest independent event collective — 4 venues, 30+ events monthly across techno, house, R&B, and live music. €2.1M annual ticket revenue.",
    tokenPrice: 100,
    totalTokens: 2500,
    soldTokens: 1050,
    investors: 83,
    daysLeft: 28,
    estimatedYield: 21,
    ticketRevenueMonthly: 175000,
    capacityPax: 3200,
    eventsPerMonth: 32,
    riskScore: 3,
    riskBreakdown: [
      { criterion: "Revenue Diversification", score: 1, label: "4 venues, 6 genres — strong diversification" },
      { criterion: "Revenue Consistency", score: 2, label: "High event frequency offsets single-event risk" },
      { criterion: "Operational Complexity", score: 4, label: "Managing 4 venues simultaneously adds risk" },
      { criterion: "Market Position", score: 2, label: "Dominant Hamburg multi-venue operator" },
      { criterion: "Artist Relationships", score: 2, label: "Long-term booking relationships with 50+ agents" },
      { criterion: "Lease Portfolio", score: 3, label: "Mixed lease maturities across 4 venues" },
    ],
    features: ["4 venues across Hamburg", "30+ events per month", "Dedicated ticketing platform", "Artist management arm", "Bar & catering collective", "Marketing team of 8", "Sound & lighting owned (not rented)", "Event insurance for all shows"],
    upcomingEvents: [
      { name: "Hafencity Festival — 2-Day Edition", date: "Jun 1-2, 2026", tickets: 5000, soldOut: false },
      { name: "Pulse x Red Bull Music Night", date: "Jun 8, 2026", tickets: 800, soldOut: true },
      { name: "Warehouse Rave vol.17", date: "Jun 14, 2026", tickets: 1200, soldOut: false },
      { name: "Rooftop R&B Series Opening", date: "Jun 20, 2026", tickets: 400, soldOut: false },
    ],
    team: [
      { name: "Denis Hartmann", role: "CEO & Co-Founder", bio: "Built Pulse from a single warehouse party to Hamburg's dominant event company. 15 years in live events across Germany, Netherlands, and Scandinavia.", initials: "DH", color: "#E879F9" },
      { name: "Miriam Hoffmann", role: "Head of Finance", bio: "Former CFO of a Hamburg media company. Oversees SPV structure, investor reporting, and dividend calculations across all 4 venues.", initials: "MH", color: "#B8954F" },
      { name: "Alex Chen", role: "Head of Bookings", bio: "Previously at Resident Advisor and Beatport. Manages artist relations, contracts, and curates programming across genres for all Pulse venues.", initials: "AC", color: "#0EA5E9" },
    ],
    faqs: [
      { q: "How does investing in a multi-venue collective differ from single venues?", a: "Pulse Events distributes risk across 4 venues and 30+ events/month. A poor night at one venue is offset by strong performance elsewhere. This is closer to a fund than a single business investment." },
      { q: "What if one venue closes?", a: "Each venue has its own sub-SPV. The parent SPV holds equity in all four. If one venue closes, investors still hold equity in the remaining three. The IID discloses this structure fully." },
      { q: "How frequently are dividends paid?", a: "Monthly, 15 days after month-end. Revenues are aggregated across all venues and events. Smart contracts distribute proportional shares automatically." },
      { q: "Can investors influence programming?", a: "Gold+ holders vote quarterly on one 'community picks' event per venue — where the investor community selects the artist or genre. This event is marketed as 'Powered by Investors'." },
    ],
  },
  {
    id: "party4",
    name: "Costa Nova Beach Club",
    type: "Beach Club",
    location: "Ibiza, Spain",
    description: "Boutique Ibiza beach club — 280 daybeds, full restaurant, two bars, and weekly sunset DJ sessions. €320 avg spend per guest. Open May–October.",
    tokenPrice: 150,
    totalTokens: 1200,
    soldTokens: 420,
    investors: 38,
    daysLeft: 42,
    estimatedYield: 24,
    ticketRevenueMonthly: 210000,
    capacityPax: 280,
    eventsPerMonth: 6,
    riskScore: 3,
    riskBreakdown: [
      { criterion: "Revenue Per Guest", score: 1, label: "€320 avg spend — premium Ibiza positioning" },
      { criterion: "Seasonal Exposure", score: 4, label: "Open only May–Oct — concentrated risk" },
      { criterion: "Licensing & Compliance", score: 2, label: "Spanish entertainment license, EU GDPR compliant" },
      { criterion: "Tourism Demand", score: 1, label: "Ibiza tourism growing 9% YoY, resilient to downturns" },
      { criterion: "Operator Experience", score: 2, label: "5 years operating, featured in Condé Nast Traveller" },
      { criterion: "FX & Cross-Border", score: 3, label: "EUR-denominated revenue, minimal FX exposure" },
    ],
    features: ["280 beachfront daybeds & loungers", "Private beach access (200m frontage)", "Full restaurant (60 seats)", "Cocktail & champagne bars x2", "Sunset DJ terrace", "Speedboat pickup service", "VIP cabanas x12", "Concierge & bottle service"],
    upcomingEvents: [
      { name: "Season Opening Gala 2026", date: "May 28, 2026", tickets: 280, soldOut: true },
      { name: "Sunset Series — Fisher b2b", date: "Jun 6, 2026", tickets: 280, soldOut: true },
      { name: "White Party — Annual Tradition", date: "Jun 27, 2026", tickets: 280, soldOut: false },
      { name: "Midsummer Moonlight Session", date: "Jul 5, 2026", tickets: 250, soldOut: false },
    ],
    team: [
      { name: "Rafael Navarro", role: "Founder & Owner", bio: "Third-generation Ibiza hospitality family. Built Costa Nova from a beach bar to a multi-million euro venue in 5 years. Featured in Vogue Spain and Condé Nast Traveller.", initials: "RN", color: "#E879F9" },
      { name: "Sophie Delacroix", role: "Events & Guest Experience", bio: "Former events director at a Monaco superyacht club. Manages all Costa Nova programming, VIP guest relations, and artist curation.", initials: "SD", color: "#F59E0B" },
    ],
    faqs: [
      { q: "How does the seasonal model affect returns?", a: "Costa Nova operates May–October (6 months). Revenue is earned during peak season and distributed monthly throughout the year. The remaining 6 months are used for maintenance, staff training, and pre-season bookings." },
      { q: "What do perks look like for an Ibiza venue?", a: "Bronze holders get priority reservation access. Silver+ get complimentary daybed reservation (2 per month during season). Gold+ get VIP cabana access and speedboat pickup from marina. Platinum get co-branded event rights." },
      { q: "What currency are returns paid in?", a: "All revenue is in EUR. Dividends are distributed in EUR via smart contracts to your wallet. No currency conversion risk." },
      { q: "What happens to the venue off-season?", a: "The property is leased year-round. During winter, it hosts private events and corporate retreats (10–15 events/winter). This off-season revenue covers base operating costs, protecting investor returns." },
    ],
  },
];

export const PARTY_FAQS = [
  { q: "What does 'party maker and promoter' mean?", a: "As a token holder, you co-own a share of the venue's SPV. This gives you proportional revenue from ticket sales, bar revenue, and event bookings — plus exclusive perks like free entry, VIP access, and co-branding rights at higher tiers. You're not just an investor; you're part of the team that makes these events happen." },
  { q: "How are dividends calculated?", a: "Monthly. Net ticket and bar revenue is aggregated after operating costs (artists, staff, licensing, bar COGS). Smart contracts distribute proportional shares to all token holders within 15 days of month-end." },
  { q: "Are nightclub and event investments high risk?", a: "Event venues carry more volatility than e.g. solar assets. Revenue varies with lineup, season, and local competition. We offset this with operator track records (minimum 3 years), strong licensing positions, and event cancellation insurance on all listed venues." },
  { q: "Do I get entry to the venue?", a: "Yes — entry perks are built into every investment tier. Bronze holders (€100+) get discounted tickets. Silver+ get free monthly entry. Gold+ get VIP access. Platinum holders get backstage / artist area access." },
  { q: "Can I invest in multiple venues?", a: "Absolutely. Each venue is a separate SPV. Investing in Neon Vault and Pulse Events gives you positions in two separate companies, each with their own revenue stream and risk profile." },
  { q: "What if the club loses its license?", a: "License risk is disclosed in each venue's IID. Our legal team vets every venue's licensing position before listing. If a license is revoked, the SPV board (including investor reps) votes on the path forward — sale, relocation, or wind-down." },
];

export const SOLAR_FAQS = [
  { q: "How does the rooftop contribution model work?", a: "Building owners offer their rooftop for solar installation at no cost to them. In return, they earn a higher yield than pure financial investors (typically 30-50% more), get reduced electricity costs, and receive a free professional roof assessment. The installation is fully funded by the investor pool." },
  { q: "What is a feed-in tariff?", a: "A government-guaranteed price for solar electricity fed into the public grid. In Germany, the EEG guarantees a fixed rate (currently 8.2 cents/kWh) for 20 years from installation. This provides stable, predictable revenue for investors." },
  { q: "How often are dividends paid?", a: "Monthly, based on the previous month's energy production and revenue. Smart contracts distribute automatically to all token holders. Revenue = kWh produced × feed-in tariff rate (or PPA rate for on-site consumption)." },
  { q: "What if the panels underperform?", a: "All panels carry 25-year manufacturer performance warranties guaranteeing at least 85% output at year 25. Actual degradation is typically 0.3-0.5% per year. Insurance covers extreme weather damage, theft, and fire." },
  { q: "Can I contribute my rooftop?", a: "Yes! Submit your rooftop details via the assessment form. Our engineers will evaluate your roof's suitability (size, orientation, structural condition). If approved, your rooftop is listed as a solar project and investors fund the installation." },
  { q: "What is the environmental impact?", a: "Each kWp of solar capacity avoids approximately 500kg of CO2 per year. A typical 100kWp installation powers the equivalent of 30 European households and saves 50 tonnes of CO2 annually." },
];
