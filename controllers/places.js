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
       const skill = await Skill.create(req.body);
       res.status(201).json(skill);
    // index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' })      
    }
}


module.exports = {
    index,
    create,
}