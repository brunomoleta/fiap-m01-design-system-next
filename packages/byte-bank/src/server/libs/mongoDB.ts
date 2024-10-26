// Importing mongoose library along with Connection type from it
import mongoose, { Connection } from "mongoose";

// Declaring a variable to store the cached database connection
let cachedConnection: Connection | null = null;

// Function to establish a connection to MongoDB
export async function connectMongoDB() {
  const mongoDbUrl = 'mongodb+srv://brunomoleta:DPt8pliy0KjMk5hg@bytebank.a0k6n.mongodb.net/?retryWrites=true&w=majority&appName=ByteBank';

  // If a cached connection exists, return it
  if (cachedConnection) {
    console.log("Using cached db connection");
    return cachedConnection;
  }
  if (typeof mongoDbUrl === 'undefined') {
    throw new Error('Please define the MONGODB_URL environment variable');
  }
  try {
    // If no cached connection exists, establish a new connection to MongoDB
    const cnx = await mongoose.connect(mongoDbUrl);

    // Cache the connection for future use
    cachedConnection = cnx.connection;

    // Log message indicating a new MongoDB connection is established
    console.log("New mongodb connection established");

    // Return the newly established connection
    return cachedConnection;

  } catch (error) {
    // If an error occurs during connection, log the error and throw it
    console.log(error);
    throw error;
  }
}