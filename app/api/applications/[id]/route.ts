import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";
import { getAuthUser } from "../../../lib/auth";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const application = await prisma.application.update({
      where: { id: params.id },
      data: { status: body.status },
    });
    return NextResponse.json(application);
  } catch {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}
