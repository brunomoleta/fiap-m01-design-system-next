"use server";

import { NextRequest, NextResponse } from "next/server";
import { TransactionService } from '$/server/services/transaction.service';

export async function POST(req: NextRequest) {
  try {
    const userId = req.headers.get('userId');

    if (!userId) {
      return NextResponse.json({error: 'Missing user authentication', status: 400});
    }

    const transactionService = new TransactionService();

    const payload = await req.text();
    const { type, amount, user } = JSON.parse(payload);

    const newTransaction =
      await transactionService.createTransaction({type, amount, user});

    return NextResponse.json({transaction: newTransaction, status: 201});
  } catch (e) {
    console.error(e);
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