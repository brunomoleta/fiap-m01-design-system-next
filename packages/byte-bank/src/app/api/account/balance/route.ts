import request from "$/app/api/config";
import mock from "$/app/api/mock.json";

export async function GET(): Promise<Response>  {
  const data = { balance: mock.account.balance };

  return request.get({
    data,
  });
}
