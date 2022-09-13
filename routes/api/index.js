const router = require('express').Router();
const userRoutes = require('./user-routes');

router.use('/users', userRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>404 error!</h1>');
})

module.exports = router;