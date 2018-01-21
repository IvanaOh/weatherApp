
export class MainStats{
  private temp : number;
  private pressure: number;
  private humidity: number;
  private temp_min: number;
  private temp_max: number;

  public constructor(tem:number, press:number,hum:number,minTem:number, maxTemp:number){
    this.temp = tem;
    this.pressure = press;
    this.humidity = hum;
    this.temp_min = minTem;
    this.temp_max = maxTemp;
  }

}
