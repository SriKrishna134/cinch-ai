const connectDB = require("../db");

const createConversationTable = async () => {
  const client = await connectDB();
  const query = `
    CREATE TABLE IF NOT EXISTS conversations (
      id SERIAL PRIMARY KEY,
      members UUID[],
      latestmessage TEXT DEFAULT '',
      unread INT[] DEFAULT '{0, 0}',
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `;
  await client.query(query);
  await client.end();
};

const createConversation = async (members, latestMessage = "", unread = [0, 0]) => {
  const client = await connectDB();
  const query = `
    INSERT INTO conversations (members, latestmessage, unread)
    VALUES ($1, $2, $3)
    RETURNING *
  `;
  const values = [members, latestMessage, unread];
  const result = await client.query(query, values);
  await client.end();
  return result.rows[0];
};

const findConversations = async (filter) => {
  const client = await connectDB();
  const { members } = filter;
  const query = `
    SELECT * FROM conversations
    WHERE $1 = ANY(members)
  `;
  const values = [members];
  const result = await client.query(query, values);
  await client.end();
  return result.rows;
};

module.exports = {
  createConversationTable, // Exported here
  createConversation,
  find: findConversations,
};
