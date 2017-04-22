import { Component, OnInit } from '@angular/core';
import { WeatherItem } from "../weather-models/weather-item";

@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.sass']
})
export class WeatherItemComponent implements OnInit {

  weatherItem: WeatherItem;

  constructor() {
    this.weatherItem = new WeatherItem('London', 'Rainy', 32);
  }

  ngOnInit() {
  }

}
