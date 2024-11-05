import { NextRequest, NextResponse } from "next/server";
import { UserService } from "$/server/services/user.service";

export async function POST(request: NextRequest): Promise<Response> {
  const postData = await request.text();
  const { email, password } = JSON.parse(postData);

  if (!email || !password) {
    return NextResponse.json(
      { error: "É necessário enviar os campos: email e senha." },
      {
        status: 400,
      }
    );
  }

  try {
    const userService = new UserService();
    const { token, name } = await userService.login({ email, password });

    return NextResponse.json({
      data: {
        token,
        name,
      },
      message: "Login realizado com sucesso!",
    });
  } catch (error) {
    console.error(error);
    let errorMessage = "An error occurred.";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      { message: errorMessage },
      {
        status: 500,
      }
    );
  }
}
