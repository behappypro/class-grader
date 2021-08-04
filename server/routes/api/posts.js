var express = require("express");
var mongodb = require("mongodb");

// Använder express router för att ändra adressen
const router = express.Router();

// Hämta inlägg
router.get('/', async (req, res) => {
    //Eftersom det är en async funktion behöver vi köra await
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Lägg till inlägg
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

// Radera Inlägg
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
      
      // Skicka respons
      res.send('Inlägg uppdaterat!');

    } catch(err) {
        console.error(err.message);
        res.send(400).send('Server Error');
    }
});

// Skapar koppling till mongodb 
async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://root:toor@cluster0.v5xcd.mongodb.net/classGrader?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
    return client.db('classGrader').collection('grades');

}

module.exports = router;