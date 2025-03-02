const connectDB = require("../db");

const createMessageTable = async () => {
  const client = await connectDB();
  const query = `
    CREATE TABLE IF NOT EXISTS messages (
      id SERIAL PRIMARY KEY,
      conversation_id UUID NOT NULL,
      sender UUID NOT NULL,
      text TEXT NOT NULL,
      imageurl TEXT DEFAULT '',
      reaction TEXT DEFAULT '',
      seenby UUID[],
      deletedby UUID[],
      replyto UUID,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;
  await client.query(query);
  await client.end();
};

const createMessage = async ({
  conversationId,
  sender,
  text,
  imageUrl = "",
  reaction = "",
  seenBy = [],
  deletedBy = [],
  replyTo = null,
}) => {
  const client = await connectDB();
  const query = `
    INSERT INTO messages (conversation_id, sender, text, imageurl, reaction, seenby, deletedby, replyto)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
  `;
  const values = [conversationId, sender, text, imageUrl, reaction, seenBy, deletedBy, replyTo];
  const result = await client.query(query, values);
  await client.end();
  return result.rows[0];
};

module.exports = {
  createMessageTable,
  createMessage,
};
