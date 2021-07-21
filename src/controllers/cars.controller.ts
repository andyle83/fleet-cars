import { Request, Response, NextFunction } from 'express';
import { CarsServiceImpl } from '../services/cars.service';

// getting all cars
const getCars = async (req: Request, res: Response, next: NextFunction) => {
  const cars = await new CarsServiceImpl().getCars();
  return res.status(200).json(cars);
};

// get a car by name
const getCar = async(req: Request, res: Response, next: NextFunction) => {
  const name: string = req.params.id;
  const car = await new CarsServiceImpl().getCar(name);
  return res.status(200).json(car); 
}

// search a car by name
const searchCars = async(req: Request, res: Response, next: NextFunction) => {
  const name: string = req.params.name;
  const car = await new CarsServiceImpl().searchCar(name);
  return res.status(200).json(car); 
}

export default { getCars, getCar, searchCars };