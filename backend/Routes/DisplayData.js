const express = require('express');
const router = express.Router();
const mongoDB = require("../db");

router.post('/foodData', async (req, res) => {
    try {
        // Call the mongoDB function as a function to get the data
        // const data = await mongoDB();

        // Check the data in the console

        // Send the data as an array
        res.send([global.Fooddata,global.foodCatogory]);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Server Error");
    }
});

module.exports = router;
