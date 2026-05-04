import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../lib/prisma";
import { getAuthUser } from "../../lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { type, name, email, phone, investmentId, amount, message, data } = body;

    if (!type || !name || !email) {
      return NextResponse.json({ error: "type, name, and email are required" }, { status: 400 });
    }

    const application = await prisma.application.create({
      data: { type, name, email, phone, investmentId, amount, message, data },
    });

    return NextResponse.json(application, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Failed to create application" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = req.nextUrl;
  const type = searchParams.get("type");
  const status = searchParams.get("status");

  const where: Record<string, string> = {};
  if (type) where.type = type;
  if (status) where.status = status;

  const applications = await prisma.application.findMany({
    where,
    include: { investment: { select: { name: true, category: { select: { name: true } } } } },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(applications);
}
