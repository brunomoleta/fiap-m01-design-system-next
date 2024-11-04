import request from "$/app/api/config";
import mock from "$/app/api/mock";

export async function GET(): Promise<Response> {
  const investments = {
    items:  mock.account.investments.items,
    total:  mock.account.investments.items.reduce(((acc, cur) => acc += cur.value), 0)
  };

  return request({
    data: investments,
  });
}
