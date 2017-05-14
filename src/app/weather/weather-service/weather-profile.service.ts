import { Injectable } from '@angular/core';
import { WeatherProfile } from '../weather-models/weather-profile';


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
