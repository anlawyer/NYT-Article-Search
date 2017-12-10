const router = require('express').Router();
const articleRoutes = require('./article');
const savedRoutes = require('./saved');

router.use('/saved', savedRoutes);
router.use('/article', articleRoutes);

module.exports = router;
