import { Request, Response, NextFunction } from 'express';
import { Cars } from '../model/car.interface';

// mock data
let cars: Cars = {
  1: {
    name: 'dodge charger 2.2',
    miles_per_gallon: 36,
    cylinders: 4,
    displacement: 135,
    horsepower: 84,
    weight_in_lbs: 2370,
    acceleration: 13,
    year: "1982-01-01",
    origin: 'USA'
  }
}

// getting all cars
const getCars = async (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json(cars);
};

export default { getCars };