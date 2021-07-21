import { Request, Response, NextFunction } from 'express';
import { CarsService, CarsServiceImpl } from '../services/cars.service';

export class CarsController {
  private _carsService: CarsService;

  constructor() {
    // TODO: Dependency injection
    this._carsService = new CarsServiceImpl();
  }

  // getting all cars
  public getCars = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cars = await this._carsService.getCars();
      return res.status(200).json(cars);
    } catch (err) {
      // pass to built-in error handle of express
      next(err);
    }
  };

  // get a car by name
  public getCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const name: string = req.params.id;
      const car = await this._carsService.getCar(name);
      return res.status(200).json(car);
    } catch(err) {
      // pass to built-in error handle of express
      next(err);
    }
  }

  // search a car by name
  public searchCars = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const searchKey: string = req.params.key;
      const car = await this._carsService.searchCar(searchKey);
      return res.status(200).json(car);
    } catch (err) {
      // pass to built-in error handle of express
      next(err);
    }
  }
}