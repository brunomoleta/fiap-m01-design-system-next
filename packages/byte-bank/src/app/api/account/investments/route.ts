import request from "$/app/api/config";
import mock from "$/app/api/mock.json";

export async function GET(): Promise<Response> {
  const investments = mock.account.investments;

  return request({
    data: investments,
  });
}
