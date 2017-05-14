import { Component, OnInit, Input } from '@angular/core';
import { WeatherItem } from "../weather-models/weather-item";

@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.sass'],
  // inputs: ['weatherItem: item'] // weatherItem in the calss, outter as item
})
export class WeatherItemComponent implements OnInit {

  @Input('item') weatherItem: WeatherItem;

  constructor() { }

  ngOnInit() { }

}
