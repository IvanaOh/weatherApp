import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  private static API_KEY = '3dafe0ae9d5037727eab159b82d10c74';
  private static CURRENT_WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather';

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');
  }

  getWeather(city){
    return this.http.get(WeatherProvider.CURRENT_WEATHER_API + "?" +  "q=" + city + "&APPID=" + WeatherProvider.API_KEY + "units=metric")
      .map(res => res.json());
  }

}
