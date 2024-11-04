"use server";

import { NextRequest, NextResponse } from "next/server";
import { UserService } from "$/server/services/user.service";

export async function POST(req: NextRequest) {
  const postData = await req.text();
  const { name, email, password } = JSON.parse(postData);

  if (!email || !password || !name) {
    return NextResponse.json(
      { error: "São necessários os campos: name, email e password." },
      { status: 400 }
    );
  }

  const userService = new UserService();

  try {
    const newUser = await userService.createUser({ name, email, password });
    return NextResponse.json(
      { message: "Usuário criado com sucesso", user: newUser },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An error occurred.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
