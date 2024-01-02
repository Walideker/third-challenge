const express = require('express')
const app = express()


const { connectionDb, getDb } = require('./db')
let db;
connectionDb((err) => {
    if (!err) {
        app.listen(8080);
            }
    db = getDb();
});
app.get('/', (req, res) => {
    res.send('its working')
})
app.get('/employe', (req, res) => {
    let employes = []
    db.collection('employe')
        .find()
        .sort({name : 1})
        .forEach(employe=>employes.push(employe))
        .then(()=>{
            res.status(200).json(employes)
        })
});

