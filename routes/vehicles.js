const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';
const dbName = 'atob';


const vehicleRoutes = (app, fs) => {
    // Fetch vehicle locations from db on every api call
    app.get('/vehicle_locations', (req, res) => {
        MongoClient.connect(url, function (err, client) {
            assert.equal(null, err);

            const db = client.db(dbName);
            const collection = db.collection('documents');
            // Find some documents
            collection.find({}).toArray(function (err, docs) {
                assert.equal(err, null);
                console.log("Found the following records");
                console.log(docs)
                res.send(docs);
            });

            client.close();
        });
    });
};

module.exports = vehicleRoutes;