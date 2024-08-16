const express = require('express');

const tourController = require('../controllers/tourController');

const router = express.Router();

router.param('id', tourController.isValidTour);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.isValidBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
