const express = require('express');
const router = express.Router();
const mongodb = require('mongodb');

//Get posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
})

//Add post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        text: req.body.text,
        createdAt: new Date(),
    });
    res.status(201).send();
});

//Delete post
router.delete('/:id', async (req, res)=>{
    const posts = await loadPostsCollection();
    await posts.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
    res.status(200).send();
})


async function loadPostsCollection(){
    const client = await mongodb.MongoClient.connect('mongodb+srv://admin:lVsO5UG2VAuThwZ3@cluster1-jtajs.mongodb.net/vue?retryWrites=true&w=majority', {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    return client.db('vue').collection('posts');
}

module.exports = router;