import express from 'express';
import { CarsController } from '../controllers/cars.controller';

const carsRouter = express.Router();
const carsController = new CarsController();

// router configuration
carsRouter.get('/', carsController.getCars);
carsRouter.get('/:id', carsController.getCar);
carsRouter.get('/search/:name', carsController.searchCars);

export = carsRouter;