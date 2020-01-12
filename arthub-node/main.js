const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const mongoClient = require("mongodb").MongoClient;
mongoClient.connect("mongodb://arthubdb:hcZPBk1VRtETYNR7FA3TnbjIOF1TtWjg1wzY2gwbnMq8LkhgxMcO98BMgpjexCt3jfCmi35C52OkUVul1pKAAg==@arthubdb.mongo.cosmos.azure.com:10255/?ssl=true&appName=@arthubdb@", function (err, db) {
  db.close();
});

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'))

app.post('/user', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.post('/request', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.get('/users', (req, res) => {
    res.send([])
})

app.get('/artists', (req, res) => {
    res.send([])
})

app.get('/requests', (req, res) => {
    res.send([])
})

app.listen(port, () => console.log(`Listening on port ${port}!`))