import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create categories
  const categories = await Promise.all([
    prisma.category.upsert({
      where: { slug: "business" },
      update: {},
      create: { name: "Business", slug: "business", description: "Local businesses — cafés, retail, creative studios" },
    }),
    prisma.category.upsert({
      where: { slug: "cars" },
      update: {},
      create: { name: "Cars", slug: "cars", description: "Fleet vehicles — co-ownership and rental yield" },
    }),
    prisma.category.upsert({
      where: { slug: "medical" },
      update: {},
      create: { name: "Medical", slug: "medical", description: "Healthcare recruiting SPVs — placement and staffing" },
    }),
    prisma.category.upsert({
      where: { slug: "fitness" },
      update: {},
      create: { name: "Fitness", slug: "fitness", description: "Fitness studios — memberships and perk tiers" },
    }),
    prisma.category.upsert({
      where: { slug: "ev-charging" },
      update: {},
      create: { name: "EV Charging", slug: "ev-charging", description: "EV charging stations — passive income from every charge" },
    }),
    prisma.category.upsert({
      where: { slug: "solar" },
      update: {},
      create: { name: "Solar", slug: "solar", description: "Solar energy — rooftop installations and feed-in tariff yield" },
    }),
  ]);

  const [business, cars, medical, fitness, evCharging, solar] = categories;

  // Seed investments from existing mock data
  const investments = [
    // Business
    { name: "Café Nero Berlin", categoryId: business.id, tokenPrice: 100, totalTokens: 2500, soldTokens: 1875, investors: 312, estimatedYield: 7, riskScore: 2, status: "live", daysLeft: 14, location: "Berlin, Germany", description: "Premium specialty coffee chain expanding to 3 new locations in Berlin." },
    { name: "Studio Volta", categoryId: business.id, tokenPrice: 100, totalTokens: 1800, soldTokens: 1260, investors: 214, estimatedYield: 5, riskScore: 4, status: "live", daysLeft: 21, location: "Hamburg, Germany", description: "Independent design studio with €1.2M ARR expanding into product licensing." },
    { name: "Markt & Co", categoryId: business.id, tokenPrice: 100, totalTokens: 1200, soldTokens: 540, investors: 89, estimatedYield: 6, riskScore: 3, status: "live", daysLeft: 30, location: "Munich, Germany", description: "Curated local goods marketplace with 40+ artisan suppliers." },
    { name: "Wellness Hub", categoryId: business.id, tokenPrice: 100, totalTokens: 900, soldTokens: 315, investors: 52, estimatedYield: 5, riskScore: 2, status: "live", daysLeft: 45, location: "Frankfurt, Germany", description: "Boutique fitness & wellness center with 2,400 active members." },
    // Cars
    { name: "Tesla Model 3 (2025)", categoryId: cars.id, tokenPrice: 50, totalTokens: 700, soldTokens: 480, investors: 34, estimatedYield: 5.5, riskScore: 2, status: "live", daysLeft: 18, location: "Berlin, Germany", description: "Premium fleet vehicle — high occupancy, consistent demand." },
    { name: "BMW 330i (2025)", categoryId: cars.id, tokenPrice: 60, totalTokens: 800, soldTokens: 320, investors: 22, estimatedYield: 6, riskScore: 2, status: "live", daysLeft: 28, location: "Munich, Germany", description: "Business fleet car — premium rates from corporate travellers." },
    { name: "Mercedes A 250 (2025)", categoryId: cars.id, tokenPrice: 55, totalTokens: 764, soldTokens: 600, investors: 45, estimatedYield: 6, riskScore: 2, status: "live", daysLeft: 9, location: "Hamburg, Germany", description: "Popular fleet vehicle — nearly 80% funded, strong performer." },
    { name: "VW ID.4 (2025)", categoryId: cars.id, tokenPrice: 50, totalTokens: 800, soldTokens: 150, investors: 12, estimatedYield: 5, riskScore: 3, status: "live", daysLeft: 42, location: "Frankfurt, Germany", description: "EV fleet — growing category with higher upside potential." },
    // Medical
    { name: "CareConnect ICU", categoryId: medical.id, tokenPrice: 75, totalTokens: 1000, soldTokens: 620, investors: 48, estimatedYield: 16, riskScore: 2, status: "live", daysLeft: 21, location: "Germany & Austria", description: "Specialized ICU nurse recruitment for major hospital networks." },
    { name: "NurseLink Europe", categoryId: medical.id, tokenPrice: 50, totalTokens: 1200, soldTokens: 400, investors: 31, estimatedYield: 18, riskScore: 3, status: "live", daysLeft: 35, location: "Western EU", description: "Cross-border nurse recruitment from Eastern to Western Europe." },
    { name: "ElderCare Staffing", categoryId: medical.id, tokenPrice: 40, totalTokens: 800, soldTokens: 700, investors: 56, estimatedYield: 13, riskScore: 2, status: "live", daysLeft: 9, location: "DACH Region", description: "Dedicated staffing for elderly care homes and home care agencies." },
    { name: "MedRecruits Specialist", categoryId: medical.id, tokenPrice: 100, totalTokens: 600, soldTokens: 180, investors: 15, estimatedYield: 21, riskScore: 3, status: "live", daysLeft: 42, location: "EU — Private hospitals", description: "Senior doctor and specialist physician recruitment." },
    // Fitness
    { name: "IronForge CrossFit", categoryId: fitness.id, tokenPrice: 50, totalTokens: 800, soldTokens: 520, investors: 41, estimatedYield: 13, riskScore: 2, status: "live", daysLeft: 22, location: "Berlin Mitte", description: "Berlin's premier CrossFit box, 340 members, 92% retention." },
    { name: "ZenFlow Yoga", categoryId: fitness.id, tokenPrice: 40, totalTokens: 600, soldTokens: 450, investors: 38, estimatedYield: 11, riskScore: 2, status: "live", daysLeft: 31, location: "Munich Schwabing", description: "Premium yoga and pilates studio, 280 members, 95% retention." },
    { name: "PeakPerformance Gym", categoryId: fitness.id, tokenPrice: 75, totalTokens: 1000, soldTokens: 300, investors: 24, estimatedYield: 15, riskScore: 3, status: "live", daysLeft: 48, location: "Hamburg HafenCity", description: "1,200 sqm premium gym with corporate wellness programme." },
    { name: "SprintCycle Studio", categoryId: fitness.id, tokenPrice: 60, totalTokens: 500, soldTokens: 480, investors: 52, estimatedYield: 14, riskScore: 3, status: "live", daysLeft: 6, location: "Frankfurt Westend", description: "Frankfurt's highest-rated indoor cycling studio, 88% occupancy." },
    // EV Charging
    { name: "ChargeHub Berlin", categoryId: evCharging.id, tokenPrice: 75, totalTokens: 2000, soldTokens: 1400, investors: 89, estimatedYield: 12, riskScore: 2, status: "live", daysLeft: 18, location: "Berlin A10 Highway", description: "20-charger highway hub on Berlin's busiest corridor, 85% utilization." },
    { name: "VoltPoint Munich", categoryId: evCharging.id, tokenPrice: 75, totalTokens: 1200, soldTokens: 600, investors: 45, estimatedYield: 10, riskScore: 2, status: "live", daysLeft: 30, location: "Munich PEP Center", description: "12-charger shopping center station with consistent retail traffic." },
    { name: "ElektroPark Hamburg", categoryId: evCharging.id, tokenPrice: 100, totalTokens: 2200, soldTokens: 1760, investors: 112, estimatedYield: 14, riskScore: 3, status: "live", daysLeft: 12, location: "Hamburg Port Logistics", description: "30-charger B2B logistics hub, 90% utilization from fleet contracts." },
    { name: "GreenCharge Vienna", categoryId: evCharging.id, tokenPrice: 100, totalTokens: 1200, soldTokens: 480, investors: 34, estimatedYield: 11, riskScore: 2, status: "live", daysLeft: 40, location: "Vienna City Center", description: "8 ultra-fast 350kW chargers in prime city-center location." },
    // Solar
    { name: "SolarDach Berlin-Kreuzberg", categoryId: solar.id, tokenPrice: 25, totalTokens: 4000, soldTokens: 2800, investors: 156, estimatedYield: 9, riskScore: 2, status: "live", daysLeft: 22, location: "Berlin Kreuzberg", description: "450m² rooftop installation, 85kWp, contributed by local building owner." },
    { name: "SunPower Frankfurt", categoryId: solar.id, tokenPrice: 30, totalTokens: 5000, soldTokens: 2000, investors: 98, estimatedYield: 10, riskScore: 2, status: "live", daysLeft: 35, location: "Frankfurt Ostend", description: "800m² commercial roof, 160kWp, high feed-in tariff yield." },
    { name: "AlpenSolar Innsbruck", categoryId: solar.id, tokenPrice: 25, totalTokens: 3000, soldTokens: 2100, investors: 82, estimatedYield: 8, riskScore: 2, status: "live", daysLeft: 28, location: "Innsbruck, Austria", description: "300m² hotel rooftop, 60kWp, contributed by Hotel Goldener Adler." },
    { name: "NordSonne Hamburg", categoryId: solar.id, tokenPrice: 35, totalTokens: 6000, soldTokens: 1800, investors: 74, estimatedYield: 11, riskScore: 3, status: "live", daysLeft: 45, location: "Hamburg Wilhelmsburg", description: "1200m² warehouse roof, 240kWp, largest installation in our portfolio." },
  ];

  for (const inv of investments) {
    await prisma.investment.upsert({
      where: { id: `seed_${inv.name.replace(/\s+/g, '_').toLowerCase().slice(0, 20)}` },
      update: inv,
      create: { ...inv, id: `seed_${inv.name.replace(/\s+/g, '_').toLowerCase().slice(0, 20)}` },
    });
  }

  // Create admin user
  const adminPassword = process.env.ADMIN_PASSWORD || "Krypt0ndo_Admin_2026";
  const hashedPassword = await bcrypt.hash(adminPassword, 10);

  await prisma.adminUser.upsert({
    where: { email: "admin@kryptondo.de" },
    update: { password: hashedPassword },
    create: {
      email: "admin@kryptondo.de",
      password: hashedPassword,
      name: "Admin",
    },
  });

  console.log("Seed complete: 6 categories, 24 investments, 1 admin user");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => prisma.$disconnect());
