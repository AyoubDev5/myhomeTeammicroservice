const router = require('express').Router();

const helloRouter = require('./hello');

router.use('/hello', helloRouter);

module.exports = router;