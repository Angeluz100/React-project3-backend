const place = require('../models/place');
const Place = require('../models/place');



async function index(req, res) {
    try {
        const places = await Place.find({uid: req.query.uid }).sort('-level');
        res.status(200).json(places);
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: 'something went wrong' });
    }
}

async function create(req, res) {
    try {
       const place = await Place.create(req.body);
       req.query.uid = place.uid;
       index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' })      
    }
}
async function deletePlace(req, res) {
    try {
        const deletedPlace = await Place.findByIdAndDelete(req.params.id);
        req.query.uid = deletedPlace.uid;
        index(req, res); 
    } catch (error){
        res.status(401).json({ error: 'something went wrong' });
    }
}
async function update(req, res) {
    try{
        const updatedPlace = await Place.findByIdAndUpdate(req.params.id, 
            req.body, {new: true}
            );
            req.query.uid = updatedPlace.uid;
            index(req, res);
    } catch (error){
        res.status(401).json({ error: 'something went wrong' });
    }
}


module.exports = {
    index,
    create,
    delete: deletePlace,
    update
}