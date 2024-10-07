import request from "$/app/api/config";
import mock from "$/app/api/mock.json";

export async function POST(req: Request): Promise<Response>  {
  const { value, type_slug } = await req.json();

  if (!value || !type_slug) {
    return new Response(JSON.stringify({ error: "Transação inválida" }), {
      status: 400,
    });
  }

  const date = new Date().getTime();
  
  const id = Buffer.from(`${value}-${type_slug}-${date}`).toString('base64');
  
  const data = {
    value,
    type_slug,
    date,
    id,
  };

  mock.account.transactions.push(data);

  return request({
    data,
    message: 'Transação efetuada com sucesso!',
  });
}
