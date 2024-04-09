import type { RequestContext } from "@vercel/edge";

export const config = {
  runtime: "edge",
};

export async function GET(request: Request, context: RequestContext) {
  // Vercel logs include a request ID. But this Request object has no ID. Why?
  const req_id = Math.random().toString(36).substring(7);
  const prefix = `[req_id ${req_id}]`;

  console.info(`${prefix} serving response`);
  return new Response(
    `Hello from /api/hello and Vercel region ${process.env.VERCEL_REGION}`,
    {
      status: 200,
      headers: {
        // "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
