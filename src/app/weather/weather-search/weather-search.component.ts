import { Component, OnInit } from '@angular/core';
import { FormBuilder }   from '@angular/forms';
import { WeatherService } from "../weather-service/weather.service";
import { WeatherItem } from '../weather-models/weather-item';
import { Subject } from 'rxjs/subject';

@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.sass'],
})
export class WeatherSearchComponent implements OnInit {

  private searchStream = new Subject<string>();
  data: any = {};

  onSubmit(form){
    // this._weatherService.searchWeatherData(form.value.city)
    //     .subscribe(data => {
    //       const item = new WeatherItem(data.name, data.weather[0].description, data.main.temp)
    //       this._weatherService.addWeatherItem(item);
    //     });
    var data = this.data;
    const item = new WeatherItem(data.name, data.weather[0].description, data.main.temp)
    this._weatherService.addWeatherItem(item);
  }

  onSearch(intputWord){
    console.log(intputWord);
    this.searchStream.next(intputWord);
  }

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    this.searchStream
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap((input:string) => this._weatherService.searchWeatherData(input))
        .subscribe(data => {
          if (data) this.data = data;
        });
  }

}
