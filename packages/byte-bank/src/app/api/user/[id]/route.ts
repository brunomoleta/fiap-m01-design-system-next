import request from "$/app/api/config";

export async function PUT(req: Request): Promise<Response>  {
  const payload = await req.json();

  const { login, password, name } = payload;

  if (!login && !password && !name) {
    return new Response(JSON.stringify({ error: "Não foram informados dados para edição" }), {
      status: 400,
    });
  }

  return request({
    data: payload,
    message: 'Usuário editado com sucesso!',
  });
}
