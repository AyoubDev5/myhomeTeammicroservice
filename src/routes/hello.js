const router = require('express').Router();

router.route('/').get((req,res)=>{
    message = 'Hello MicroServices from get request';
    res.json({message}); 
}) 

module.exports = router;