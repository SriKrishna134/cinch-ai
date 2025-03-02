const { Client } = require("pg");
const dotenv = require("dotenv");
const path = require("path");

// Load environment variables from the .env file
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const connectDB = async () => {
  try {
    // Create a new PostgreSQL client
    const client = new Client({
      connectionString: process.env.SUPABASE_DB_URI, // Set your Supabase DB URI in the .env file
      ssl: { rejectUnauthorized: false }, // Necessary for secure connections
    });

    // Connect to the database
    await client.connect();

    console.log(`✅ Supabase DB connected successfully`);

    return client; // Return the connected client for usage elsewhere
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
