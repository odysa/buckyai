import { NextRequest, NextResponse } from "next/server";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextRequest) {
  const { question } = (await req.json()) as { question: string };

  if (!question) {
    return new NextResponse(JSON.stringify({ text: "Empty prompt" }), {
      status: 400,
      headers: { "content-type": "application/json" },
    });
  }

  const res = await fetch(
    "https://bucky-ai-production.up.railway.app/qa" +
      encodeURI("?q=" + question),
    {
      method: "GET",
    },
  );

  if (res.status != 200) {
    return new NextResponse(
      JSON.stringify({ text: "Failed to fetch answer" }),
      {
        status: 400,
        headers: { "content-type": "application/json" },
      },
    );
  }

  const respJson = await res.json();

  return new Response(JSON.stringify({ text: respJson.answer }));
}
