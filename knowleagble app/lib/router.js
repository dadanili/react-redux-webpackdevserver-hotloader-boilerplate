var router = require('express').Router();
var handler = require('./handler')

router.get('/profile', handler.profile.get);
router.post('/profile', handler.profile.post);

router.get('/expertise', handler.expertise.get);
router.post('/expertise', handler.expertise.post);
router.delete('/expertise', handler.expertise.delete);

// router.get('/charity', handler.charity.get);
router.post('/charity', handler.charity.post);

router.get('/allprofiles', handler.search.get);


module.exports = router;