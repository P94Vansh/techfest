import { Pool } from "pg";
import fs from "node:fs";
import path from "node:path";
import nodemailer from "nodemailer";

import { NextResponse } from "next/server";

// Define the connection string
const secrets = JSON.parse(
  fs.readFileSync(path.join(path.resolve(), "secrets.json")).toString()
);
const connectionString = secrets.DATABASE_URL;

// Create a new client instance
const pool = new Pool({
  connectionString,
});

let isConnected = false;

export async function getPool() {
  if (!isConnected) {
    try {
      await pool.connect();
      isConnected = true;
    } catch (error) {
      console.error({ "db.js connection error : ": error });
    }
  }
  return pool;
}

export async function hasRecord(pool, rollno) {
  // const pool = await getPool();
  // Define the SELECT query to check if the record exists
  const query = `SELECT EXISTS (SELECT 1 FROM RegistrationForm WHERE UniversityRollNo = $1);`;

  try {
    // Execute the query with the provided UniversityRollNo
    const res = await pool.query(query, [rollno]);

    // Check if the record exists
    const recordExists = res.rows[0].exists;
    return recordExists;
  } catch (err) {
    console.error("Error checking record existence:", err);
  } finally {
  }
}

export async function countEvents(pool, rollno) {
  // Connect to the PostgreSQL database
  // const pool = await getPool();

  // Define the SELECT query to get the number of values in SelectedEvents
  const query = `SELECT array_length(SelectedEvents, 1) AS NumberOfEvents FROM RegistrationForm WHERE UniversityRollNo = $1;`;
  let error, n;
  try {
    // Execute the query with the provided UniversityRollNo
    const res = await pool.query(query, [rollno]);

    // Extract the number of events from the query result
    const numberOfEvents = res.rows[0]?.NumberOfEvents;

    n = numberOfEvents || 0;
  } catch (err) {
    console.error("Error getting number of selected events:", err);
    error = err;
  } finally {
  }

  return [error, n];
}

export async function addEvent(pool, universityRollNo, newEvent) {
  let error;

  // Define the UPDATE query to append a new value to the SelectedEvents array
  const query = `UPDATE RegistrationForm SET SelectedEvents = SelectedEvents || $2 WHERE UniversityRollNo = $1;`;

  try {
    // Execute the query with the provided UniversityRollNo and new event value
    await pool.query(query, [universityRollNo, `{${newEvent}}`]);
    // result = true;
  } catch (err) {
    console.error("Error appending to SelectedEvents:", err);
    error = err;
  } finally {
    // Close the database connection
  }
  return error;
}

export async function addTransaction(
  pool,
  { transaction_id, email, event, amount, verified }
) {
  const query = `
      INSERT INTO Transactions (
          Transaction_ID, 
          Email, 
          Event, 
          Amount, 
          Verified
      ) VALUES ($1, $2, $3, $4, $5);
  `;
  let error;
  // Define the values to insert
  const values = [transaction_id, email, event, amount, verified];

  try {
    // Execute the query with the provided values
    await pool.query(query, values);
    // console.log("Transaction inserted successfully");
    // error = ;
  } catch (err) {
    console.error("Error inserting transaction:", err);
    error = err;
  } finally {
    // Close the database connection
    // await client.end();
  }

  return error;
}

export async function getEvents(pool, universityRollNo) {
  // Connect to the PostgreSQL database
  // const client = await getPool();

  // Define the SELECT query to retrieve the SelectedEvents array
  const query = `
      SELECT SelectedEvents
      FROM RegistrationForm
      WHERE UniversityRollNo = $1;
  `;
  let error, result;
  try {
    // Execute the query with the provided UniversityRollNo
    const res = await pool.query(query, [universityRollNo]);

    // Extract the SelectedEvents array from the query result
    const selectedEvents = res.rows[0]?.selectedevents;
    console.log(res.rows[0]);

    result = selectedEvents || [];
  } catch (err) {
    console.error("Error retrieving SelectedEvents:", err);
    error = err;
  } finally {
    // Close the database connection
    // await client.end();
  }

  return [error, result];
}

export function ErrorResponse(error) {
  return NextResponse.json({ type: "error", message: error.message });
}

export function SuccessResponse(message) {
  return NextResponse.json({ type: "success", message });
}

export async function insertBGMIRegistration(
  client,
  { rollno, team_leader, player2, player3, player4, team_name }
) {
  // Connect to the PostgreSQL database
  // await client.connect();

  // Define the INSERT query
  const query = `
      INSERT INTO BGMI_Registrations (
          UniversityRollNo, 
          TeamName, 
          TeamLeader, 
          Player2, 
          Player3, 
          Player4
      ) VALUES ($1, $2, $3, $4, $5, $6);
  `;

  // Define the values to insert
  const values = [rollno, team_name, team_leader, player2, player3, player4];
  let error;
  try {
    // Execute the query with the provided values
    await client.query(query, values);
  } catch (err) {
    console.error("Error inserting BGMI registration:", err);
    error = err;
  } finally {
    // Close the database connection
    // await client.end();
  }
  return error;
}

export async function insertRegistration(
  client,
  {
    rollno,
    email,

    firstname,
    lastname,
    branch,

    department,
    year,
    phone,

    event = [],
    gender,
    semester,
  }
) {
  // Connect to the PostgreSQL database
  // await client.connect();

  // Define the INSERT query
  const query = `
      INSERT INTO RegistrationForm 
    ( 
      UniversityRollNo, 
      EmailAddress, 
      
      FirstName, 
      LastName, 
      Branch, 
      
      Department, 
      Year, 
      PhoneNumber, 

      SelectedEvents, 
      Gender, 
      Semester

    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
  `;

  // Define the values to insert
  const values = [
    rollno,
    email,

    firstname,
    lastname,
    branch,

    department,
    year,
    phone,

    event,
    gender,
    semester,
  ];

  let error;
  try {
    // Execute the query with the provided values
    await client.query(query, values);
  } catch (err) {
    console.error("Error inserting BGMI registration:", err);
    error = err;
  } finally {
    // Close the database connection
    // await client.end();
  }
  return error;
}

export async function hasBGMIRecord(pool, rollno) {
  // const pool = await getPool();
  // Define the SELECT query to check if the record exists
  const query = `SELECT EXISTS (SELECT 1 FROM BGMI_Registrations WHERE UniversityRollNo = $1);`;

  try {
    // Execute the query with the provided UniversityRollNo
    const res = await pool.query(query, [rollno]);

    // Check if the record exists
    const recordExists = res.rows[0].exists;
    return recordExists;
  } catch (err) {
    console.error("Error checking record existence:", err);
  } finally {
  }
}

export async function getRegistrations(pool) {
  if (!pool) pool = await getPool();
  try {
    // SQL query to select all records from the 'RegistrationForm' table
    const result = await pool.query(`
      
 SELECT 
        rf.firstname,
        rf.lastname,
        rf.year,
        rf.semester,
        rf.gender,
        rf.college,
        rf.emailaddress,
        rf.phoneNumber,
        rf.selectedEvents,
        t.transaction_id,
        t.amount AS transactionamount,
        t.verified
      FROM 
        RegistrationForm rf
      LEFT JOIN 
        Transactions t
      ON 
        rf.emailaddress = t.email;
      `);
    return result.rows; // Return the rows from the result
  } catch (error) {
    console.error("Error fetching registrations:", error);
    throw new Error("Unable to fetch registrations");
  }
}

// export async function getBGMI_Transactions(pool) {
//   if (!pool) pool = await getPool();
//   try {
//     // SQL query to select all records from the 'RegistrationForm' table
//     const result = await pool.query(`
//    SELECT 
//     B.UniversityRollNo,
//     B.TeamName,
//     B.TeamLeader,
//     B.Player2,
//     B.Player3,
//     B.Player4,
//     T.Transaction_ID,
//     T.Event,
//     T.Amount,
//     T.Verified
// FROM 
//     BGMI_Registrations B
// LEFT JOIN 
//     Transactions T 
// ON 
//     B.UniversityRollNo = T.UniversityRollNo
// WHERE 
//     T.Event = 'BGMI BADSHAH';
//      `);
//     return result.rows; // Return the rows from the result
//   } catch (error) {
//     console.error("Error fetching registrations:", error);
//     throw new Error("Unable to fetch registrations");
//   }
// }

// export async function getBGMI_Transactions(pool) {
//   if (!pool) pool = await getPool();
//   try {
//     // SQL query to select all records from the 'RegistrationForm' table
//     const result = await pool.query(`
//    SELECT 
//     B.UniversityRollNo,
//     B.TeamName,
//     B.TeamLeader,
//     B.Player2,
//     B.Player3,
//     B.Player4,
//     T.Transaction_ID,
//     T.Event,
//     T.Amount,
//     T.Verified
// FROM 
//     BGMI_Registrations B
// LEFT JOIN 
//     Transactions T 
// ON 
//     B.UniversityRollNo = T.UniversityRollNo
// WHERE 
//     T.Event = 'BGMI BADSHAH';
//      `);
//     return result.rows; // Return the rows from the result
//   } catch (error) {
//     console.error("Error fetching registrations:", error);
//     throw new Error("Unable to fetch registrations");
//   }
// }

export async function updateVerified(pool, transactionId, value) {
  const query = `
    UPDATE Transactions
    SET Verified = $2
    WHERE Transaction_ID = $1;
  `;

  let error;
  try {
    // Execute the query to update the Verified column
    const result = await pool.query(query, [transactionId, Boolean(value)]);
    console.log(`Rows affected: ${result.rowCount}`);

    // Fetch the user's email and other details from the Transactions table
    const userQuery = `
      SELECT Email, Event, Amount
      FROM Transactions
      WHERE Transaction_ID = $1;
    `;
    const userResult = await pool.query(userQuery, [transactionId]);
    console.log("Query result:", userResult.rows);
    const user = userResult.rows[0];

    if (!user) {
      console.error("No user found for the given transaction ID.");
      return "No user found for the given transaction ID.";
    }

    const { email,event,amount } = user;
    console.log("Fetched user details:", { email, event, amount });

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service (e.g., Gmail, Outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER, // Replace with your email
        pass: process.env.EMAIL_PASS, // Replace with your email password or app-specific password
      },
    });

    // Define the email content based on the `value`
    const mailOptions = {
      from: "vanshgambhirag@gmail.com", // Sender address
      to:  email,
      subject: value
        ? "Registration Successful"
        : "Registration Issue - Contact Support",
      text: value
        ? `Dear Participant,\n\nYour registration for the event "${event}" has been successfully verified. The amount of ₹${amount} has been received.\n\nThank you for registering!\n\nBest regards,\nTechFest Team`
        : `Dear Participant,\n\nWe encountered an issue verifying your registration for the event "${event}". Please contact support at 8979402739 for assistance.\n\nBest regards,\nTechFest Team`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

  } catch (err) {
    console.error("Error updating Verified column or sending email:", err);
    error = err;
  }

  return error;
}