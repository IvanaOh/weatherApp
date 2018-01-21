import {Weather} from "./weatherModel";
import {MainStats} from "./MainStats";

export class WeatherResponse {
  private name: string;
  private weather: Weather[];
  private main : MainStats;
  private wind:string;

  constructor(n: string, weath: Weather[], m: MainStats, w:string) {
    this.name = n;
    this.weather = weath;
    this.main = m;
    this.wind = w;
  }
}
