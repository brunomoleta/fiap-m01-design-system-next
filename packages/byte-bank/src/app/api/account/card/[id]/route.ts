import request from "$/app/api/config";
import mock from "$/app/api/mock.json";

type Params = {
  id: string;
};

export async function PUT(req: Request, { params }: { params: Params }): Promise<Response>  {
  const { id } = params;
  const payload = await req.json();

  const { function: cardFunction, is_active } = payload;

  if (!('is_active' in payload) && !cardFunction) {
    return new Response(JSON.stringify({ error: "Não foram informados dados para edição" }), {
      status: 400,
    });
  }

  const index = mock.account.cards.findIndex(({ id: $id }) => $id === id);

  mock.account.cards[index] = {
    ...mock.account.cards[index],
    function: cardFunction === undefined ? mock.account.cards[index].function : cardFunction,
    is_active: is_active === undefined ? mock.account.cards[index].is_active : is_active,
  };

  return request({
    data: mock.account.cards[index],
    message: 'Cartão editado com sucesso!',
  });
}
