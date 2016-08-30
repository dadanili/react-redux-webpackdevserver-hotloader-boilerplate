var router = require('express').Router();
var handler = require('./handler')

router.get('/profile', handler.profile.get);
router.post('/profile', handler.profile.post);

router.get('/expertise', handler.expertise.get);
router.post('/expertise', handler.expertise.post);
module.exports = router;