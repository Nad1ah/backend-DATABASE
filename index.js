const dotenv = require("dotenv");
dotenv.config();

const { MongoClient } = require("mongodb");

const dbUrl = process.env.DB_URL;

const client = new MongoClient(dbUrl);

async function main() {
await client.connect();

const db = client.db("EditDataBase");
db.collection("tests").insertMany([{ name: "John" }, { name: "Alice" }]);
console.log(db.collection("test").find().toArray()); 
}

main()
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(`Failed to connect to MongoDB: ${err}`))