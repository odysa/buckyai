import { NextRequest, NextResponse } from "next/server";

export default async function handler(req: NextRequest) {
    return new Response(JSON.stringify({ "text": "jack" }))
}