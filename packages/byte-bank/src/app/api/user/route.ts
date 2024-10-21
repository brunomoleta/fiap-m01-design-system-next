import connectMongoDB from "../../libs/mongoDB";
import { NextResponse } from "next/server";
import User from "$/app/models/user";

export async function POST(req: Request): Promise<Response>  {
  const payload = await req.json();

  const { email, password, name } = payload;

  if (!email || !password || !name) {
    return NextResponse.json({ status:400, error: "Campos obrigatórios: email, senha e nome" });
  }

  await User.create({name, email, password})

  await connectMongoDB();

  return NextResponse.json({
    status: 201,
    message: 'Usuário criado com sucesso!',
  })
}
