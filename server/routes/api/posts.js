var express = require("express");
var mongodb = require("mongodb");


const router = express.Router();

// Get Posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add Post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        namn: req.body.namn,
        moment: req.body.moment,
        omdome: req.body.omdome,
        createdAt : new Date()
    });
    res.status(201).send();
});

// Delete Post
router.delete('/delete/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)})
    res.status(200).send();
});

  //Uppdatera uppgifter
  router.put('/update/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    try {
      await posts.updateOne({_id: new mongodb.ObjectID(req.params.id)},
      { $set: { namn: req.body.namn,moment:req.body.moment,omdome:req.body.omdome},},
      { upsert: true })
      
      // Send response in here
      res.send('Item Updated!');

    } catch(err) {
        console.error(err.message);
        res.send(400).send('Server Error');
    }
});


async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://root:toor@cluster0.v5xcd.mongodb.net/classGrader?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('classGrader').collection('grades');

}

module.exports = router;