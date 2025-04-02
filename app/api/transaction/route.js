import { NextResponse } from "next/server";
import {ErrorResponse, getPool, SuccessResponse, updateVerified} from "../../../lib/db"

export async function POST(req) {
  const pool = await getPool();
  const adminCookie = req.cookies.get("admin")?.value;
  if (!adminCookie || adminCookie !== (process.env.ADMIN_KEY || "admin-key"))
    return NextResponse.json(
      { message: "Unauthorized access" },
      { status: 401 } // 401 Unauthorized status
    );

  let { transaction_id, value } = await req.json();
  let error = await updateVerified(pool,transaction_id, value);
  if(error) return ErrorResponse(error);
  return SuccessResponse(value ? `Transaction '${transaction_id}' marked Verified` : `Transaction '${transaction_id}' marked unverified`);
}
