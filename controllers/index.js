const router = require('express').Router();

const homeRoutes = require('./homeRoutes');
const APIroutes = require('./APIroutes');

router.use('/', homeRoutes);
router.use('/api', APIroutes);

module.exports = router;
