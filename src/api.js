// src/api.js
const API_URL = "http://localhost:3000"; // Backend server URL

// Fetch all books from the library catalogue
export const fetchCatalogue = async () => {
  try {
    const response = await fetch(`${API_URL}/catalogue`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching catalogue:", error);
    return [];
  }
};

// Fetch all room bookings
export const fetchBookings = async () => {
  try {
    const response = await fetch(`${API_URL}/booking`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching bookings:", error);
    return [];
  }
};

// Reserve a book
export const reserveBook = async (bookDetails) => {
  try {
    const response = await fetch(`${API_URL}/reserve-book`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookDetails),
    });
    return await response.json();
  } catch (error) {
    console.error("Error reserving book:", error);
  }
};

// Book a room
export const bookRoom = async (bookingDetails) => {
  try {
    const response = await fetch(`${API_URL}/book-room`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingDetails),
    });
    return await response.json();
  } catch (error) {
    console.error("Error booking room:", error);
  }
};

// User login
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return await response.json();
  } catch (error) {
    console.error("Error logging in:", error);
  }
};



/*
import { DataAPIClient } from "@datastax/astra-db-ts";
import { v4 as uuidv4 } from "uuid";
import { v1 as uuidv1 } from "uuid";
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

// Initialize the AstraDB client
dotenv.config();
const client = new DataAPIClient("AstraCS:jlUPfMkRGQSrUOtCgwYfHjHH:88aa5679849e3a4b7a4307eedb5156d6fba260a71ee632ff6dd822ab6b8e6859"); 
const db = client.db("https://37f51461-a483-48ca-a40a-e900300d8a5e-us-east-2.apps.astra.datastax.com"); 
*/
/*----------------------------------SERVER---------------------------------------------*/
/*
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('Server running on http://localhost:3000');
});*/
/*---------------------------------SERVER----------------------------------------------*/

/*--------------------------------FETCH DATA-------------------------------------------*/
/*
app.get('/test', async (req, res) => {
  try {
    const collection = db.collection('library_catalogue');
    console.log('Test collection initialized:', collection);
    res.send('Database connection is working!');
  } catch (err) {
    console.error('Database connection failed:', err.message);
    res.status(500).send(`Database connection failed: ${err.message}`);
  }
});

app.get('/booking', async (req, res) => {
  try {
    // Access the booking_table collection
    const collection = db.collection('library_catalogue');
    console.log('Collection initialized:', collection);

    // Fetch documents using find({})
    const results = await collection.find({}).toArray();
    console.log('Query results:', JSON.stringify(results, null, 2));

    // Send the results as JSON
    res.json(results);
  } catch (err) {
    console.error('Error fetching data:', err.message);
    console.error('Full error:', err.stack);
    res.status(500).send(`Failed to fetch data: ${err.message}`);
  }
});

*/
/*--------------------------------FETCH DATA-------------------------------------------*/
/*
(async () => {
  try {
    // Reference the collection (table)
    const collection = db.collection("library_catalogue"); 
    
    const userID = uuidv4();
    const roomID = 101;
    const bookedfor = new Date('2025-01-20T10:00:00Z');
    const booktime = new Date().toISOString();
    */
    /*
    // Insert new data
    const addData = {
      user_id: userID,
      room_id: roomID,
      booked_for: bookedfor,
      booking_time: booktime     
    };

    await collection.insertOne(addData);
    console.log("New data added successfully!");
    */
/*
    // Fetch all data from the collection
    const cursor = await collection.find({});
    const allData = await cursor.toArray();
    console.log("Current data in the collection:",JSON.stringify(allData, null, 2));
  } catch (error) {
    console.error("Error:", error.message);
  }
})();

*/