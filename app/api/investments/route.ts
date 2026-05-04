import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";
import { getAuthUser } from "../../lib/auth";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const categorySlug = searchParams.get("category");
  const status = searchParams.get("status");

  const where: Record<string, unknown> = {};
  if (categorySlug) where.category = { slug: categorySlug };
  if (status) where.status = status;

  const investments = await prisma.investment.findMany({
    where,
    include: { category: { select: { name: true, slug: true } } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(investments);
}

export async function POST(req: Request) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const investment = await prisma.investment.create({ data: body });
    return NextResponse.json(investment, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Failed to create investment", detail: String(e) }, { status: 500 });
  }
}
