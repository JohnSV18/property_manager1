const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = 'mongodb://localhost:27017/your_database_name';
const client = new MongoClient(uri);

async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (e) {
    console.error(e);
  }
}

connectToMongo();

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});

// app.get('/all', async (req, res) => {
//   try {
//     const db = client.db('your_database_name');
//     const collection = db.collection('your_collection_name');
//     const results = await collection.find({}).toArray();
//     res.json(results);
//   } catch (e) {
//     console.error(e);
//     res.status(500).send('Server error');
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});