import { Injectable } from '@angular/core';
import { WeatherProfile } from './weather-profile';
import { WeatherItem } from './weather-item';
import { WEATHER_ITEMS } from "./weather.data";
import { Observable } from "rxjs/observable";
import { Http } from '@angular/http';
import "rxjs/Rx";

@Injectable()
export class ProfileService {

  private profiles: WeatherProfile[] = [
    new WeatherProfile('Default Profile', ['Mountain view', 'San jose'])
  ];

  saveNewProfile(cities: string[]){
    const profileName = 'Profile' + this.profiles.length;
    const profile = new WeatherProfile(profileName, cities);
    this.profiles.push(profile);
  }

  getProfiles(){
    return this.profiles;
  }

  deleteProfile(profile){
    this.profiles.splice(this.profiles.indexOf(profile), 1);
  }

  constructor() {}



}
