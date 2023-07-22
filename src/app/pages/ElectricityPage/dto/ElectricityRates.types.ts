interface IPlan {
  name: string;
  cost: number;
}

interface IElectricityRatesRespones {
  data: IPlan[];
}

export { IPlan, IElectricityRatesRespones };
