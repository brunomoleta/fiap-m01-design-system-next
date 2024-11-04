import request from "$/app/api/config";
import mock from "$/app/api/mock";

export async function POST(req: Request): Promise<Response>  {
  const { card_holder, card_last_digits, card_expire_date, type, is_active } = await req.json();

  if (!card_holder || !card_last_digits || !card_expire_date || !type) {
    return new Response(JSON.stringify({ error: "Cartão inválido" }), {
      status: 400,
    });
  }

  const id = Buffer.from(`${card_holder}-${card_last_digits}-${card_expire_date}`).toString('base64');
  
  const data = {
    card_holder,
    card_last_digits,
    card_expire_date,
    type,
    is_active: is_active === undefined ? true : is_active,
    id,
  };

  mock.account.cards.push(data);

  return request({
    data,
    message: 'Cartão adicionado com sucesso!',
  });
}
