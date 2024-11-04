import request from "$/app/api/config";
import mock from "$/app/api/mock";

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

  console.log(data)

  return request({
    data,
    message: 'Transação efetuada com sucesso!',
  });
}

export async function PUT(req: Request): Promise<Response> {
  const { id, value, type_slug, date } = await req.json();
  console.log(value, type_slug, date, id);

  if (!id || !value || !type_slug || !date) {
    return new Response(JSON.stringify({ error: "Transação inválida" }), {
      status: 400,
    });
  }

  const transactionIndex = mock.account.transactions.findIndex(
    (transaction) => transaction.id === id
  );

  if (transactionIndex === -1) {
    console.log("Entrou aqui");
    return new Response(JSON.stringify({ error: "Transação não encontrada" }), {
      status: 404,
    });
  }

  console.log("Deu bom");

  // Atualiza a transação usando transactionIndex
  mock.account.transactions[transactionIndex] = {
    id,
    value,
    type_slug,
    date,
  };

  console.log("Transação atualizada:", mock.account.transactions[transactionIndex]);

  return new Response(
    JSON.stringify({
      message: "Transação atualizada com sucesso!",
      data: mock.account.transactions[transactionIndex],
    }),
    { status: 200 }
  );
}

