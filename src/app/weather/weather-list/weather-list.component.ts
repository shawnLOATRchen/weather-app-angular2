import { Component, OnInit } from '@angular/core';
import { WeatherItem } from "../weather-models/weather-item";
import { WeatherService } from "../weather-service/weather.service";

@Component({
  selector: 'weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.sass'],
})
export class WeatherListComponent implements OnInit {

  weatherItems: WeatherItem[];
  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.weatherItems = this._weatherService.getWeatherItems();
  }

}
