import request from "$/app/api/config";

export async function POST(req: Request): Promise<Response>  {
  const payload = await req.json();

  const { login, password, name } = payload;

  if (!login || !password || !name) {
    return new Response(JSON.stringify({ error: "Campos obrigatórios: email, senha e nome" }), {
      status: 400,
    });
  }

  return request({
    data: payload,
    message: 'Usuário criado com sucesso!',
  });
}
