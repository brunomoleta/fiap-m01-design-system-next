// "use server";
import { NextRequest, NextResponse } from "next/server";
import { TransactionService } from "$/server/services/transaction.service";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const transactionId = params.id;

  if (!transactionId) {
    return NextResponse.json(
      { error: "O campo id é necessário para buscar uma transação." },
      { status: 400 }
    );
  }

  const transactionService = new TransactionService();

  try {
    const transaction =
      await transactionService.getTransactionById(transactionId);
    return NextResponse.json(
      { message: "Transação encontrada com sucesso", transaction },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An error occurred.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const patchData = await req.text();
  const { id, type, amount } = JSON.parse(patchData);

  if (!id) {
    return NextResponse.json(
      { error: "O campo id é necessário para editar uma transação." },
      { status: 400 }
    );
  }

  const transactionService = new TransactionService();

  try {
    const updatedTransaction = await transactionService.updateTransaction(id, {
      type,
      amount,
    });
    return NextResponse.json(
      {
        message: "Transação atualizada com sucesso",
        transaction: updatedTransaction,
      },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An error occurred.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const transactionId = params.id;

  if (!transactionId) {
    return NextResponse.json(
      { error: "O campo id é necessário para excluir uma transação." },
      { status: 400 }
    );
  }

  const transactionService = new TransactionService();

  try {
    await transactionService.deleteTransaction(transactionId);
    return NextResponse.json(
      { message: "Transação excluída com sucesso" },
      { status: 200 }
    );
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : "An error occurred.";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}
