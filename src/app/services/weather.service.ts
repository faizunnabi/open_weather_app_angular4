import {Injectable} from '@angular/core';
import {HttpModule, Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  result: any;
  constructor(private http: Http) {
  }

  getWeather(str) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + str + ',uae&appid=your_api_key')
    .map(res => res.json());
  }
}
