const router = require('express').Router();
const articleRoutes = require('./article');
const savedRoutes = require('./saved');

// Book routes
router.use('/saved', savedRoutes);
router.use('/article', articleRoutes);

module.exports = router;
