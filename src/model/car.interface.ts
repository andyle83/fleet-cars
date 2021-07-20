export interface BaseCar {
  name: string;
  miles_per_gallon: number;
  cylinders: number;
  displacement: number;
  horsepower: number;
  weight_in_lbs: number;
  acceleration: number;
  year: string;
  origin: string;
}

export interface Car extends BaseCar {
  [key: number]: number;
}

export interface Cars {
  [key: number]: Car;
}