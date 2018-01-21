import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';
import {WeatherResponse} from "./weatherResponse";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:WeatherResponse;
  location:{
    city:string,
    state:string
  };

  constructor(
    public navCtrl: NavController,
    private weatherProvider:WeatherProvider,
    private storage:Storage) {

  }

  ionViewWillEnter(){
    this.storage.get('location').then((val) => {
      if(val != null){
        this.location = JSON.parse(val);
      } else {
        this.location = {
          city: 'Miami',
          state: 'FL'
        }
      }

      this.weatherProvider.getWeather('Ohrid')  .subscribe(weather => {
          this.weather = weather;
        });
    });
  }

}
