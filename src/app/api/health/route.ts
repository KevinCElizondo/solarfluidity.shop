import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: "online",
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || "development",
    service: "SolarFluidity.shop API"
  });
}
