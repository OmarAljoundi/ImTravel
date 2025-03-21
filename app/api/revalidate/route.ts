import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    revalidatePath("/", "layout");
    return NextResponse.json(
      {
        success: true,
      },
      {
        status: 200,
      }
    );
  } catch (ex) {
    console.error("Couldn't be revalidated", ex);
    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 400,
      }
    );
  }
}
