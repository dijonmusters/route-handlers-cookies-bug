import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const cookiesList = cookies();
  console.log({ cookiesList: cookiesList.getAll() });

  return NextResponse.json(
    { message: "Hello, Next.js!" },
    {
      headers: { "Set-Cookie": `test=yep` },
    }
  );
}
