import { Car } from '../model/car.interface';

const fs = require('fs');
const utils = require('util');
const readFile = utils.promisify(fs.readFile);

export interface CarsService {
  getCars(): Promise<Car[]>;
  getCar(name: string): Promise<Car>;
  searchCar(searchKey: string): Promise<Car[]>;
}

export class CarsServiceImpl implements CarsService {
  public async getCars(): Promise<Car[]> {
    try {
      const data = await readFile('cars.json', 'utf-8');
      return JSON.parse(data);
    } catch (err) {
      console.log(`Error when reading data ${err}`);
      throw err;
    }
  }
  
  public async getCar(name: string): Promise<Car> {
    try {
      const data = await readFile('cars.json', 'utf-8');
      const cars: Car[] = JSON.parse(data);
      return cars.filter(car => car.Name == name)[0];
    } catch (err) {
      console.log(`Error when reading data ${err}`);
      throw err;
    }
  }

  public async searchCar(searchKey: string): Promise<Car[]> {
    try {
      const data = await readFile('cars.json', 'utf-8');
      const cars: Car[] = JSON.parse(data);
      return cars.filter(car => car.Name.includes(searchKey));
    } catch (err) {
      console.log(`Error when reading data ${err}`);
      throw err;
    }
  }
}