import { Component } from '@angular/core';
import { WeatherListComponent } from './weather/weather-list/weather-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app works!';
}
