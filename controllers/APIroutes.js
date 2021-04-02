const router = require('express').Router();
// const path = require('path');
const Workout = require('../models/workout');

router.get('/workouts', (req, res) => {
  Workout.find({})
    .then((dbWorkOut) => {
      res.json(dbWorkOut);
    })
    .catch((err) => {
      res.json(err);
    })
});

router.get('/exercise', (req, res) => {
  
});

router.get('/stats', (req, res) => {
  
});

module.exports = router;