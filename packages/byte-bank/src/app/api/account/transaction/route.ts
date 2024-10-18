import request from "$/app/api/config";
import mock from "$/app/api/mock.json";

export async function POST(req: Request): Promise<Response>  {
  const { value, type_slug, date } = await req.json();

  if (!value || !type_slug || !date) {
    return new Response(JSON.stringify({ error: "Transação inválida" }), {
      status: 400,
    });
  }

  const id = Buffer.from(`${value}-${type_slug}-${date}`).toString('base64');
  
  const data = {
    date,
    value,
    type_slug,
    id,
  };

  mock.account.transactions.push(data);

  return request({
    data,
    message: 'Transação efetuada com sucesso!',
  });
}
