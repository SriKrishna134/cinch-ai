const connectDB = require("../db");

const createUserTable = async () => {
  const client = await connectDB();
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      email TEXT NOT NULL UNIQUE,
      phone_num TEXT NOT NULL,
      password TEXT NOT NULL,
      profile_pic TEXT DEFAULT 'https://via.placeholder.com/150',
      otp TEXT DEFAULT '',
      about TEXT DEFAULT '',
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;
  await client.query(query);
  await client.end();
};

const createUser = async ({ name, email, phoneNum, password, profilePic, otp = "", about = "" }) => {
  const client = await connectDB();
  const query = `
    INSERT INTO users (name, email, phone_num, password, profile_pic, otp, about)
    VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING *
  `;
  const values = [name, email, phoneNum, password, profilePic, otp, about];
  const result = await client.query(query, values);
  await client.end();
  return result.rows[0];
};

module.exports = {
  createUserTable,
  createUser,
};
