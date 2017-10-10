import { Component, OnInit } from '@angular/core';
import {Weather} from '../models/weather';
import {WeatherService} from '../services/weather.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Home';
  weather: Weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {}

  getWeather(str: String) {
    this.weatherService.getWeather(str).subscribe(
      res => {
        console.log(res);
        this.weather = new Weather((res.main.temp - 273.15), res.weather[0].icon, res.weather[0].description, res.dt);
      },
      error => console.log('Error in fetching the data')
    );
  }
}
