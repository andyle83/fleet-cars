import express from 'express';
import controller from '../controllers/cars.controller';

const carsRouter = express.Router();

// router configuration
carsRouter.get('/', controller.getCars);
carsRouter.get('/:id', controller.getCar);
carsRouter.get('/search/:name', controller.searchCars);

export = carsRouter;