import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(`${process.env.API_URL}/api/Heroes`);
  const data = await res.json();

  return NextResponse.json({ data });
}
