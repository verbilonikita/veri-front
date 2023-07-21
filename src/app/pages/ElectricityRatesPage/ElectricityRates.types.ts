interface IPlan {
  name: string;
  cost: number;
}

interface IElectricityResponseError {
  message: string;
}

interface IElectricityRatesRespones {
  data: IPlan[];
}

export { IPlan, IElectricityRatesRespones, IElectricityResponseError };
