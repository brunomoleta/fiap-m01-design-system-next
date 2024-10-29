import {NextRequest, NextResponse} from "next/server";
import {TransactionService} from "$/server/services/transaction.service";

export async function GET(req: NextRequest) {
  try {
    const userId = req.headers.get('userId');
    const transactionId = req.nextUrl.searchParams.get('transactionId');

    if (!userId) {
      return NextResponse.json({error: 'Missing user authentication', status: 400});
    }
    if (!transactionId) {
      return NextResponse.json({error: 'Missing transactionId in path', status: 400});
    }

    const transactionService = new TransactionService();
    const transaction = await transactionService.getTransactionById(transactionId, userId, req);

    if (!transaction) {
      return NextResponse.json({error: 'Transaction not found', status: 404});
    }

    return NextResponse.json({transaction: transaction, status: 200});

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

export async function POST(req: NextRequest) {
  try {
    const transactionService = new TransactionService();

    const body = await req.text();
    const { type, amount, user } = JSON.parse(body);

    const newTransaction =
      await transactionService.createTransaction({type, amount, user}, req);

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