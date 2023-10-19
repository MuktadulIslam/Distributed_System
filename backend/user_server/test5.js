const { createDB } = require("./models/databaseConnection.js");
const { createUserCollection } = require("./models/userCollection.js");

const { getUserCollection } = require("./models/userCollection.js");
const { getDatabase } = require("./models/databaseConnection.js");

async function runServer() {
    await createDB();
    await createUserCollection()
    // console.log("hi", getDatabase())
    insertData();
}

async function insertData() {
  try {
    // Insert the data
    const result = await getUserCollection().insertOne({ name: "Muktadul", roll: "1215" });
    console.log(`Inserted ${result.insertedCount} document(s}`);
  } catch (err) {
    console.error('Error:', err);
  }
}

// Call the function to insert data
runServer()


