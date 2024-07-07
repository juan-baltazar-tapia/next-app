import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";
import prisma from "@/prisma/client";

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "Milk",
      price: 2.5,
    },
    {
      id: 2,
      name: "Orange Juice",
      price: 1.5,
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  //validate data
  const validation = schema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  // find if user exists
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (user)
    return NextResponse.json({ error: "User Exists Already" }, { status: 400 });

  const newUser = prisma.user.create({
    data: {
      email: body.email,
      name: body.name,
    },
  });

  return NextResponse.json(newUser, { status: 201 });
}
