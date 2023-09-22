import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const tag = req.nextUrl.searchParams.get("tag");
    revalidateTag(tag as string);
    return NextResponse.json(
      {
        message: `Success for tag ${tag}`,
      },
      {
        status: 200,
      }
    );
  } catch (ex) {
    return NextResponse.json(
      {
        message: `Faild ${ex}`,
      },
      {
        status: 400,
      }
    );
  }
}
