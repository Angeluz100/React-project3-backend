const express = require('express');
const router = express.Router();
const placesCtrl = require('../../controllers/places');

router.get('/', placesCtrl.index);
router.post('/', placesCtrl.create);


module.exports = router;