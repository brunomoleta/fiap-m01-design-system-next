// "use server";

import { NextRequest, NextResponse } from "next/server";
import { UserService } from "$/server/services/user.service";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params.id;

  if (!userId) {
    return NextResponse.json(
      { error: "O campo id é necessário para buscar um usuário." },
      { status: 400 }
    );
  }

  const userService = new UserService();

  try {
    const user = await userService.getUserById(userId);
    return NextResponse.json(
      { message: "Usuário encontrado com sucesso", user },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An error occurred.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const patchData = await req.text();
  const { id, name, email, password } = JSON.parse(patchData);

  if (!id) {
    return NextResponse.json(
      { error: "O campo id é necessário para editar um usuário." },
      { status: 400 }
    );
  }

  const userService = new UserService();

  try {
    const updatedUser = await userService.updateUser(id, {
      name,
      email,
      password,
    });
    return NextResponse.json(
      { message: "Usuário atualizado com sucesso", user: updatedUser },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An error occurred.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
