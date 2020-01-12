const express = require('express')
const bodyParser = require('body-parser')
const azureStorage = require('azure-storage')
const getStream = require('into-stream')
const multer = require('multer');
const uuidv1 = require('uuid/v1');

const app = express()
const port = 3000

const mongoose = require("mongoose");
mongoose.Promise = Promise;
mongoose.connect(
    "mongodb://arthubdb:hcZPBk1VRtETYNR7FA3TnbjIOF1TtWjg1wzY2gwbnMq8LkhgxMcO98BMgpjexCt3jfCmi35C52OkUVul1pKAAg%3D%3D@arthubdb.mongo.cosmos.azure.com:10255/?ssl=true&appName=@arthubdb@"
);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to database');
});

//models
const User = require('./models/user');
const Tag = require('./models/tag');
const Request = require('./models/request');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Nothing to see here!'));

app.get('/user', (req, res) => {
    User.find({}, (err, users) => {
        res.send(users);
    });
});

app.get('/user/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) {
            errorResponse(res, err);
        } else {
            res.send(user);
        }
    });
});

app.get('/tag', (req, res) => {
    Tag.find({}, (err, tags) => {
        res.send(tags);
    });
})

app.get('/tag/:name', (req, res) => {
    Tag.findOne({name: req.params.name}, (err, tag) => {
        if (err) {
            errorResponse(res, err);
        } else if (!tag) {
            errorResponse(res, 'tag not found: ' + req.params.name);
        } else {
            res.send(tag);
        }
    });
});

app.get('/artwork', (req, res) => {
    Artwork.find({}, (err, artworks) => {
        res.send(artworks);
    })
})

app.get('/artwork/:id', (req, res) => {
    Artwork.findById(req.params.id, (err, artwork) => {
        res.send(artwork)
    })
})

app.get('/request', (req, res) => {
    Request.find({}, (err, requests) => {
        res.send(requests)
    })
})

app.get('/request/:id', (req, res) => {
    Request.findById(req.params.id, (err, request) => {
        res.send(request)
    })
})

app.post('/user', (req, res) => {
    console.log(req.body);
    var newUser = req.body;
    const userModel = new User(newUser);
    userModel.save()
        .then((savedUser) => {
            console.log('user saved!');
            newUser.tags.forEach((tagName) => {
                Tag.findOneAndUpdate(
                    {name: tagName},
                    {$push: {users: savedUser._id}},
                    {upsert: true, new: true, setDefaultsOnInsert: true},
                    (err, tag) => {
                        console.log(err);
                        console.log(tag);
                    })
            });
            res.send(savedUser);
        })
        .catch((err) => {
            console.log(err);
            errorResponse(res, err);
        });
});

app.post('/request', (req, res) => {
    Request.create(req.body)
        .then((savedRequest) => {
            res.send(savedRequest);
        })
        .catch((err) => {
            console.log(err);
            errorResponse(res, err);
        });
});

// app.post('/artwork', multer({ storage: multer.memoryStorage() }).single('picture'), (req, res) => {
//     const blobService = azureStorage.createBlobService('arthubimg', 'M73+d/5aqKCW7Xcw52kAXIezTIq2xklPR/W6DiQD6CXqyd0HLxXB+IeOzfMaTGBIRBanBIG4sVG2FH7MYTwL9Q==');
//     const blobName = uuidv1();
//     console.log(req.file)
//     const stream = getStream(req.file.buffer);
//     const streamLength = req.file.buffer.length;

//     blobService.createBlockBlobFromStream(containerName, blobName, stream, streamLength, err => {

//         if(err) {
//             handleError(err);
//             return;
//         }

//         res.render('success', { 
//             message: 'File uploaded to Azure Blob storage.' 
//         });
//     });

//     // Artwork.create({src: uploadBlobResponse.urlencoded})
//     //     .then((savedArtwork) => {
//     //         res.send(savedArtwork);
//     //     });
// });

app.listen(port, () => console.log(`Listening on port ${port}!`));

function errorResponse(res, err, code=400) {
    res.status(code).send({
        error: true,
        details: err
    });
}