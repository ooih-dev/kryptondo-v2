import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { getAuthUser } from "../../../lib/auth";

export async function GET(_req: Request, { params }: { params: { id: string } }) {
  const investment = await prisma.investment.findUnique({
    where: { id: params.id },
    include: { category: true, applications: { orderBy: { createdAt: "desc" } } },
  });

  if (!investment) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json(investment);
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const investment = await prisma.investment.update({
      where: { id: params.id },
      data: body,
    });
    return NextResponse.json(investment);
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(_req: Request, { params }: { params: { id: string } }) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await prisma.investment.delete({ where: { id: params.id } });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
