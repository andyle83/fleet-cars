import { Request, Response, NextFunction } from 'express';
import { CarsServiceImpl } from '../services/cars.service';

export class CarsController {
  // getting all cars
  public async getCars(req: Request, res: Response, next: NextFunction) {
    const cars = await new CarsServiceImpl().getCars();
    return res.status(200).json(cars);
  };

  // get a car by name
  public async getCar(req: Request, res: Response, next: NextFunction) {
    const name: string = req.params.id;
    const car = await new CarsServiceImpl().getCar(name);
    return res.status(200).json(car); 
  }

  // search a car by name
  public async searchCars(req: Request, res: Response, next: NextFunction) {
    const name: string = req.params.name;
    const car = await new CarsServiceImpl().searchCar(name);
    return res.status(200).json(car); 
  }
}