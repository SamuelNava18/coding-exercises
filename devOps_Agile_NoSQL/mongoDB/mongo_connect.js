const { MongoClient } = require('mongodb');

async function main() {
    // MongoDB Credentials
    const user = 'root'; // MongoDB username
    const password = 'NntZikVHIOQXp5VCmKc7RG3P'; // MongoDB password
    const host = '172.21.163.155'; // MongoDB host
    const port = '27017'; // MongoDB port

    // MongoDB connection url
    const url = `mongodb://${user}:${password}@${host}:${port}/?authSource=admin`;

    // create a MongoDB Client instance
    const client = new MongoClient(url);

    try {
        await client.connect();
        console.log("Connected to MongoDB server");

        // Access the 'training' database and 'javascript' collection 
        const db = client.db('training');
        const collection = db.collection('mongodb_glossary');
        // Insert multiple documents
        const docs = [
            { database: "una base de datos contiene colecciones" },
            { collection: "una colección almacena los documentos" },
            { document: "un documento contiene los datos en forma de pares clave-valor." }
        ];
        const result = await collection.insertMany(docs);
        console.log(`Inserted ${result.insertedCount} documents.`);
        console.log(`Inserted documents IDs: ${Object.values(result.insertedIds)}`);

        // Retrieve and log all documents
        const documents = await collection.find({}).toArray();
        console.log("Documents in collection: ", documents);
    }
    catch (err) {
        console.error(err);
    }
    finally {
        await client.close();
        console.log("Connection closed");
    }

}

main();