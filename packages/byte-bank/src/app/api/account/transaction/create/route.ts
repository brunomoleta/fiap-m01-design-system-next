import { NextRequest, NextResponse } from "next/server";
import { TransactionService } from "$/server/services/transaction.service";

export async function POST(request: NextRequest): Promise<Response> {
  const postData = await request.text();
  const { type, amount, user } = JSON.parse(postData);

  if (!type || !amount || !user) {
    return NextResponse.json(
      { error: "É necessário enviar os campos: type, amount e user." },
      { status: 400 }
    );
  }

  const transactionService = new TransactionService();

  try {
    const transaction = await transactionService.createTransaction({
      type,
      amount,
      user,
    });
    return NextResponse.json(
      { message: "Transação criada com sucesso", transaction },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An error occurred.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
