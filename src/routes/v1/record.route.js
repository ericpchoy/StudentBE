const express = require('express');
const recordController = require('../../controllers/record.controller');

const router = express.Router();

router.post('/createnewrecord', recordController.createNewRecord);



module.exports = router;