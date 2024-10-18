import { type NextRequest } from 'next/server'
import request from "$/app/api/config";
import mock from "$/app/api/mock.json";

export async function GET(req: NextRequest): Promise<Response> {
  const searchParams = req.nextUrl.searchParams;
  let items = Number(searchParams.get('items'));

  const cards = items ? mock.account.cards.slice(-items) : mock.account.cards;

  return request({
    data: cards.reverse(),
  });
}
