export class Weather {

  temperature: string;
  icon: string;
  description: string;
  date_of_cal: string;
  constructor(t, ic, de, dc) {
    this.temperature = t;
    this.icon = 'http://openweathermap.org/img/w/' + ic + '.png';
    this.description = de;
    this.date_of_cal = dc;
  }
}
