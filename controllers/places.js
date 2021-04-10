const place = require('../models/place');
const Place = require('../models/place');



async function index(req, res) {
    try {
        const places = await Place.find({});
        res.status(200).json(places);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' });
    }
}

async function create(req, res) {
    try {
       const place = await Place.create(req.body);
       res.status(201).json(place);
    // index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' })      
    }
}


module.exports = {
    index,
    create,
}