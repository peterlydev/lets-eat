const express = require('express')

const router = express.Router();

//get all meals
router.get('/', (req, res) => {
    res.json({mssg: 'GET ALL MEALS'})
});

//get single meal
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET A SINGLE MEAL'})
})

//post a meal
router.post('/', (req, res) => {
    res.json({mssg: 'POST A NEW MEAL'})
})

// delete a meal
router.delete('/', (req, res) => {
    res.json({mssg: 'DELETE A MEAL'})
})

//update a meal
router.patch('/', (req, res) => {
    res.json({mssg: 'UPDATE A MEAL'})
})

module.exports = router
