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

router.get('/stats', (req, res) => {
  
});

router.get('/workouts/range', (req, res) => {
  Workout.find({})
    .limit(7)
    .then((dbWorkOut) => {
      res.json(dbWorkOut);
    })
    .catch((err) => {
      res.json(err);
    })
});

router.post('/workouts', ({ body }, res) => {
  Workout.create({})
  .then((dbWorkOut) => {
    res.json(dbWorkOut);
  })
  .catch(({err}) => {
    console.log(err);
  })
});

module.exports = router;