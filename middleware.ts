import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)

  console.log("hostname", req.headers);
  const hostname = req.headers
    .get("host")!
    .replace(".localhost:3000", `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  const path = url.pathname;
  console.log("path", path);
  if (
    hostname === "localhost:3000" ||
    hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN
  ) {
    console.log("OMAR");
    return NextResponse.next();
  }

  // rewrite everything else to `/[domain]/[path] dynamic route
  return NextResponse.rewrite(new URL(`/${hostname}${path}`, req.url));
}
