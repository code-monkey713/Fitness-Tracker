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

router.put('/workouts/:id', ({ params, body }, res) => {
  console.log('Parameters: ', body, params);

  Workout.findByIdAndUpdate(
    { _id: params.id },
    { $push: { exercises: body } },
    { new: true }
    )
    .then((dbWorkOut) => {
      res.json(dbWorkOut);
    })
    .catch((err) => {
      res.json(err);
    })
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
  Workout.create({ body })
  .then((dbWorkOut) => {
    res.json(dbWorkOut);
  })
  .catch(({err}) => {
    console.log(err);
  })
});

module.exports = router;