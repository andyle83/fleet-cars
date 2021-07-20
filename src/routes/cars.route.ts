import express from 'express';
import controller from '../controllers/cars.controller';

const carsRouter = express.Router();

// router configuration
carsRouter.get('/', controller.getCars);

export = carsRouter;