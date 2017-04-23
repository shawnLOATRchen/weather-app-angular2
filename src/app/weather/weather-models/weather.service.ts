import { Injectable } from '@angular/core';
import { WeatherItem } from './weather-item';
import { WEATHER_ITEMS } from "./weather.data";
import { Observable } from "rxjs/observable";
import { Http } from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class WeatherService {

  weatherItems: WeatherItem[];

  constructor(private _http: Http) {}

  getWeatherItems(){
    return WEATHER_ITEMS;
  }

  addWeatherItem(weatherItem: WeatherItem){
    WEATHER_ITEMS.push(weatherItem);
  }

  clearWeatherItems(){
    WEATHER_ITEMS.splice(0);
  }

  searchWeatherData(city: string): Observable<any>{
    const QUERY_URL = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const KEY = '423faea37c7e847278f6dfefe5101b9b';
    return this._http.get(QUERY_URL+city+'&APPID='+KEY+'&units=metric')
           .map(response => response.json())
           .catch(error => { return []; });
  }

}
