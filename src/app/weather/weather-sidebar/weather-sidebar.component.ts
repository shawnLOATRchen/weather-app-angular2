import { Component, OnInit } from '@angular/core';
import { WeatherProfile } from '../weather-models/weather-profile';
import { ProfileService } from '../weather-models/weather-profile.service';
import { WeatherService } from '../weather-models/weather.service';
import { WeatherItem } from '../weather-models/weather-item';

@Component({
  selector: 'weather-sidebar',
  templateUrl: './weather-sidebar.component.html',
  styleUrls: ['./weather-sidebar.component.sass'],
  providers: [ProfileService, WeatherService]
})
export class WeatherSidebarComponent implements OnInit {

  profiles: WeatherProfile[];

  constructor(private _profileService:ProfileService, private _weatherService:WeatherService) {}

  onSaveNew(){
    const cities = this._weatherService.getWeatherItems().map(function(item){
      return item.cityName;
    });
    this._profileService.saveNewProfile(cities);
  }

  onLoadProfile(profile){
    this._weatherService.clearWeatherItems();
    profile.cities.forEach(function(city){
      this._weatherService.searchWeatherData(city)
          .retry()
          .subscribe(data => {
            const item = new WeatherItem(data.name, data.weather[0].description, data.main.temp)
            this._weatherService.addWeatherItem(item);
          });
    }.bind(this));
  }

  onDeleteProfile(event, profile){
    event.stopPropagation();
    this._profileService.deleteProfile(profile);
  }

  ngOnInit() {
    this.profiles = this._profileService.getProfiles();
  }

}
