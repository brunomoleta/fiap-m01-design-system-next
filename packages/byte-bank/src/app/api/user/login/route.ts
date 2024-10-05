import request from "$/app/api/config";

export async function POST(req: Request): Promise<Response>  {
  const payload = await req.json();
  const { login, password } = payload;

  if (!login || !password) {
    return new Response(JSON.stringify({ error: "Usuário ou senha inválidos" }), {
      status: 400,
    });
  }

  const token = Buffer.from(`${login}-${password}`).toString('base64');

  return request({
    data: {
      token,
    },
    message: 'Login realizado com sucesso!',
  });
}
