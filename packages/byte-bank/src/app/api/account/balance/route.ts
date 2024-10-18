import request from "$/app/api/config";
import mock from "$/app/api/mock.json";

export async function GET(): Promise<Response> {
  const data = { balance: mock.account.transactions.reduce(((acc, cur) => acc += cur.value), 0) };

  return request({
    data,
  });
}
