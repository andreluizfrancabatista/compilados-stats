const express = require('express');
const Model = require('../model/model');
const { error } = require('console');
const { MongoClient, ServerApiVersion } = require('mongodb');

const router = express.Router();
const uri = process.env.DB_URI;
const client = new MongoClient(uri);

//Get by home_team Method
router.get('/getOne/:league/:home', async (req, res) => {
    try {
        const database = client.db('fbref');
        const league = database.collection(req.params.league);
        const data = await league.findOne({ HomeTeam: req.params.home });
        console.log(req.params.league);
        console.log(req.params.home);
        res.json(data);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get('/getAll', async (req, res) => {
    try {
        const database = client.db('fbref');
        const league = database.collection('BundesLiga');

        // Query for a movie that has the title 'Back to the Future'
        const query = { HomeTeam: 'wolfsburg' };
        const data = await league.findOne(query);
        res.json(data);
    }
    catch {
        res.status(500).json({ message: error.message });
    }
    finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }

})
//


module.exports = router;
