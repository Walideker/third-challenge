const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
    connectionDb: (cb) => {
        MongoClient.connect(  'mongodb://127.0.0.1:27017/valor')
            .then((client) => {
                dbConnection = client.db();
                return cb();
            })
            .catch((err) => {
                console.error('Error connecting to MongoDB:', err);
                return cb(err);
            });
    },
    getDb: () => dbConnection,
};
