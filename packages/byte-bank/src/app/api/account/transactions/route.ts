"use server";

import {NextRequest, NextResponse} from "next/server";
import {TransactionService} from '$/server/services/transaction.service';

export async function GET(req: NextRequest) {
  try {
    const userId = req.headers.get('userId');

    if (!userId) {
      return NextResponse.json({error: 'Missing userId in headers', status: 400});
    }

    const transactionService = new TransactionService();
    const transactions = await transactionService.getAllTransactions(userId);

    return NextResponse.json({transactions: transactions, status: 200})

  } catch (e) {
    console.error(e)
    let errorMessage = "Server error.";
    if (e instanceof Error) {
      errorMessage = e.message;
    }
    return NextResponse.json(
      {message: errorMessage},
      {
        status: 500,
      }
    );
  }
}