import request from "$/app/api/config";

export async function POST(req: Request): Promise<Response>  {
  const payload = await req.json();
  const { email, password } = payload;

  if (!email || !password) {
    return new Response(JSON.stringify({ error: "Usuário ou senha inválidos" }), {
      status: 400,
    });
  }

  const token = Buffer.from(`${email}-${password}`).toString('base64');

  return request({
    data: {
      token,
    },
    message: 'Login realizado com sucesso!',
  });
}
