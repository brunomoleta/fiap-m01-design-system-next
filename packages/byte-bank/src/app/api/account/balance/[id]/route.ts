import { NextRequest, NextResponse } from "next/server";
import { TransactionService } from "$/server/services/transaction.service";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params.id;

  if (!userId) {
    return NextResponse.json(
      {
        error:
          "O campo userId é necessário para obter o balanço das transações do usuário.",
      },
      { status: 400 }
    );
  }

  const transactionService = new TransactionService();

  try {
    const transactions = await transactionService.getTransactionsByUser(userId);
    const balance = transactions.reduce(
      (total, transaction) => total + transaction.amount,
      0
    );

    return NextResponse.json(
      {
        message: "Balanço das transações do usuário calculado com sucesso",
        balance,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An error occurred.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
