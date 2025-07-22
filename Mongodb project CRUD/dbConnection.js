const { MongoClient } = require('mongodb');

const dbconnectionurl = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(dbconnectionurl);

const dbName = 'Test';


const dbconnection = async () => {
  try {
    await client.connect(); // Connect to MongoDB server
    const db = client.db(dbName); 
    console.log("✅ Connected to MongoDB");
    return db;
  } catch (err) {
    console.error(" MongoDB connection error:", err);
    throw err;
  }
};

module.exports = { dbconnection };
