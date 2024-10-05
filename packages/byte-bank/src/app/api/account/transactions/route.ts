import { type NextRequest } from 'next/server'
import request from "$/app/api/config";
import mock from "$/app/api/mock.json";

export async function GET(req: NextRequest): Promise<Response> {
  const searchParams = req.nextUrl.searchParams;
  const items = Number(searchParams.get('items'));

  const data = items ? mock.account.transactions.slice(0, items) : mock.account.transactions;

  return request.get({
    data,
  });
}
