const express = require('express');
const router = express.Router();
const placesCtrl = require('../../controllers/places');

router.get('/', placesCtrl.index);
router.post('/', placesCtrl.create);
router.delete('/:id', placesCtrl.delete);
router.put('/:id', placesCtrl.update);


module.exports = router;