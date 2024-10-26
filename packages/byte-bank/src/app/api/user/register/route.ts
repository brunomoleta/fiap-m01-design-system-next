"use server";

import {NextRequest, NextResponse} from "next/server";
import {UserService} from "$/server/services/user.service";

export async function POST(req: NextRequest) {

  const payload = await req.text();
  const { name, email, password } = JSON.parse(payload);

  if (!email || !password || !name) {
    return NextResponse.json(
      { error: "São necessários os campos: name, email e password." },
      {
        status: 400,
      }
    );
  }

  const userService = new UserService();

  try {
    const newUser = await userService.createUser({name, email, password});
    return NextResponse.json(
      { message: 'Usuário criado com sucesso', user: newUser },
      {
        status: 201,
      }
    );
  } catch (e) {
    console.error(e)
    let errorMessage = "An error occurred.";
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return NextResponse.json(
      { message: errorMessage },
      {
        status: 500,
      }
    );
  }
}