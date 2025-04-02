// app/api/registration/route.js
// import dotenv from "dotenv"
// dotenv.config()
import { NextResponse } from "next/server";

import {
  addEvent,
  addTransaction,
  countEvents,
  ErrorResponse,
  getEvents,
  getPool,
  getRegistrations,
  hasRecord,
  SuccessResponse,
} from "../../../lib/db";

// Handler function for different HTTP methods
export async function POST(req) {

  const pool = await getPool();
  const {
    // branch,
    // department,
    // email,
    // event,
    // firstname,
    // gender,
    // lastname,
    // phone,
    // rollno,
    // semester,
    // transaction_id,
    // year,
    firstname,
    lastname,
    year,
    semester,
    gender,
    college,
    email,
    phone,
    event,
    transaction_id,
    transition_amount,
  } = await req.json();
  const verified=false;
  try {
    // Check if the user already has a record in the database
    // const recordExists = await hasRecord(pool, rollno);
    // if (recordExists) {
    //   // couting number of events registered in
    //   let [ge_error, events] = await getEvents(pool, rollno);
    //   if (ge_error)
    //     return NextResponse.json({ type: "error", message: ge_error.message });

    //   const eventCount = events.length;
    //   if (eventCount >= 2) {
    //     return NextResponse.json({
    //       type: "error",
    //       message: "Already in two events : " + events.join(" and "),
    //     });
    //   }

    //   console.log({ events });
    //   if (Array.isArray(events) && events.includes(event))
    //     return NextResponse.json({
    //       type: "error",
    //       message: `Already Registered in '${event}'`,
    //     });

    //   // adding transition id with error checking
    //   if (department !== "UIT") {
    //     let t_error = await addTransaction(pool, {
    //       transaction_id,
    //       rollno,
    //       event,
    //       amount: transition_amount,
    //       verified: department === "UIT",
    //     });
    //     if (t_error) return ErrorResponse(t_error);
    //   }

    //   // adding event to list
    //   let e_error = await addEvent(pool, rollno, event);
    //   if (e_error) return ErrorResponse(e_error);
    //   return SuccessResponse("");
    // }

    const result = await pool.query(
      `INSERT INTO RegistrationForm 
      ( 
        FirstName, 
        LastName, 
        Year, 
        Semester, 
        Gender, 
        College, 
        EmailAddress, 
        PhoneNumber, 
        SelectedEvents, 
        TransactionID, 
        TransitionAmount
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
      [
        firstname,
        lastname,
        year,
        semester,
        gender,
        college,
        email,
        phone,
        [event], // Assuming `event` is stored as an array
        transaction_id,
        transition_amount,
      ]
    );
    await addTransaction(pool, {
      transaction_id,
      email,
      event,
      amount: transition_amount,
      verified
    });

    return SuccessResponse("");
  } catch (error) {
    console.error("Error creating record:", error);
    return NextResponse.json({ type: "error", message: error.message });
  }
}

export async function GET(req) {
  console.log("Loaded ADMIN_KEY:",process.env.ADMIN_KEY);
  const adminCookie = req.cookies.get("admin")?.value;
  console.log("adminCookie",adminCookie);
  // console.log({adminCookie})
  if (!adminCookie || adminCookie !== (process.env.ADMIN_KEY || "admin-key"))
    return NextResponse.json(
      { message: "Unauthorized access" },
      { status: 401 } // 401 Unauthorized status
    );

  try {
    // Query to select all registrations from the table
    const result = await getRegistrations();

    // Return the result as JSON
    return NextResponse.json(result);
  } catch (error) {
    console.error("Error fetching registrations:", error);

    // Return an error response
    return NextResponse.json(
      { message: "Error fetching registrations" },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  return;
  const pool = await getPool();
  const { EmailAddress } = await req.json();

  try {
    const result = await pool.query(
      "DELETE FROM RegistrationForm WHERE EmailAddress = $1 RETURNING *",
      [EmailAddress]
    );

    if (result.rowCount === 0) {
      return new Response(JSON.stringify({ error: "Record not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(result.rows[0]), { status: 200 });
  } catch (error) {
    console.error("Error deleting record:", error);
    return new Response(JSON.stringify({ error: "Error deleting record" }), {
      status: 500,
    });
  }
}
