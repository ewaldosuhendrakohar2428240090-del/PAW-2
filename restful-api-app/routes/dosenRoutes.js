const express = require('express');
const router = express.Router();
const prodiController = require('../controllers/dosenController');
// const cekApiKey = require('../middlewares/cekApiKey');
const verifyToken = require('../middlewares/verifyToken');

router.get('/', dosenController.getAll);
router.get('/:id', dosenController.getById);
router.post('/', verifyToken, hanyaRole('admin'), dosenController.create);

module.exports = router;