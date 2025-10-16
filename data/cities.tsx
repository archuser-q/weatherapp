export interface CityWeather {
  name: string;
  temp: string;
  high: string;
  low: string;
}

export const cities: CityWeather[] = [
  { name: "Hanoi", temp: "10°", high: "31°", low: "23°" },
  { name: "Delhi", temp: "24°", high: "31°", low: "19°" },
  { name: "Kuala Lumpur", temp: "32°", high: "32°", low: "24°" },
  { name: "Washington DC", temp:"27°", high:"33°", low:"22°"},
];
