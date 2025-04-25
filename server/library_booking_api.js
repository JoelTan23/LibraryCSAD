// Import required dependencies
import { DataAPIClient } from "@datastax/astra-db-ts";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// Load environment variables from .env
dotenv.config();

// Initialize AstraDB client using environment variables
const client = new DataAPIClient(process.env.ASTRA_DB_TOKEN);
const db = client.db(process.env.ASTRA_DB_URL);

/*---------------------------------- SERVER SETUP ----------------------------------*/

const app = express();
const port = 3000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(bodyParser.json());

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

/*--------------------------- FETCH DATA FROM DATABASE ----------------------------*/

// Fetch library catalogue
app.get("/catalogue", async (req, res) => {
  try {
    const collection = db.collection("library_catalogue");
    const results = await collection.find({}).toArray();
    res.json(results);
  } catch (err) {
    console.error("Error fetching catalogue:", err.message);
    res.status(500).send(`Failed to fetch catalogue: ${err.message}`);
  }
});

// Fetch room bookings
app.get("/booking", async (req, res) => {
  try {
    const collection = db.collection("room_bookings");
    const results = await collection.find({}).toArray();
    res.json(results);
  } catch (err) {
    console.error("Error fetching room bookings:", err.message);
    res.status(500).send(`Failed to fetch room bookings: ${err.message}`);
  }
});

/*---------------------------- INSERT DATA INTO DATABASE ---------------------------*/

// Insert a new book reservation
app.post("/reserve-book", async (req, res) => {
  try {
    const { user_id, book_name, book_genre, author, book_description } = req.body;
    const collection = db.collection("book_reservations");

    const newReservation = {
      id: uuidv4(),
      user_id,
      book_name,
      book_genre,
      author,
      book_description,
      reservation_time: new Date().toISOString(),
    };

    await collection.insertOne(newReservation);
    res.status(201).json({ message: "Book reserved successfully", reservation: newReservation });
  } catch (err) {
    console.error("Error inserting book reservation:", err.message);
    res.status(500).send(`Failed to reserve book: ${err.message}`);
  }
});

// Insert a new room booking
app.post("/book-room", async (req, res) => {
  try {
    const { user_id, room_type } = req.body;
    const collection = db.collection("room_bookings");

    const newBooking = {
      user_id,
      booking_time: new Date().toISOString(),
      room_type,
    };

    await collection.insertOne(newBooking);
    res.status(201).json({ message: "Room booked successfully", booking: newBooking });
  } catch (err) {
    console.error("Error inserting room booking:", err.message);
    res.status(500).send(`Failed to book room: ${err.message}`);
  }
});

/*----------------------------- USER LOGIN FUNCTION ------------------------------*/

// User login function
app.post("/login", async (req, res) => {
  try {
    const { user_id, password } = req.body;
    const collection = db.collection("user_accounts");
    const user = await collection.findOne({ user_id, password });

    if (user) {
      res.status(200).json({ message: "Login successful", user_id });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } catch (err) {
    console.error("Error logging in:", err.message);
    res.status(500).send(`Failed to log in: ${err.message}`);
  }
});
