enum links {
  calculator = 'calculator',
  home = '/',
}

// to move into ENV

enum API {
  API_URL = 'http://localhost:3000',
  ELECTRICITY_URL = '/electricity',
  CALCULATE = '/calculate',
  URL = API.API_URL + ELECTRICITY_URL + API.CALCULATE,
}

export { links, API };
