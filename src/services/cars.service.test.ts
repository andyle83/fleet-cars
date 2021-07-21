import { CarsServiceImpl } from './cars.service';

describe("CarsServiceImpl", () => {

  test('should return list of all cars', async() => {
    const carsService = new CarsServiceImpl();
    const cars = await carsService.getCars();
    expect(cars).toHaveLength(406);
  })

  test('should return a single car', async () => {
    const carsService = new CarsServiceImpl();
    const carName = 'buick electra 225 custom'
    const car = await carsService.getCar(carName);
    expect(car).not.toBeNull();
  })

})