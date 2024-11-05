import { NextRequest, NextResponse } from "next/server";
import { TransactionService } from "$/server/services/transaction.service";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const userId = params.id; // Altere aqui para capturar o `id` diretamente

  if (!userId) {
    return NextResponse.json(
      {
        error:
          "O campo userId é necessário para listar as transações do usuário.",
      },
      { status: 400 }
    );
  }

  const transactionService = new TransactionService();

  try {
    const transactions = await transactionService.getTransactionsByUser(userId);
    return NextResponse.json(
      {
        message: "Transações do usuário encontradas com sucesso",
        transactions,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An error occurred.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
