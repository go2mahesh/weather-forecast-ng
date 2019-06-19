import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';
import { Weatherforecast, Response as Res, Features, Forecast, Forecastday, Simpleforecast, Forecastday2  } from '../../models/weatherforecast';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
txtCity: string;
txtState: string;
txtCountry: string;
weatherdata: Weatherforecast ;
resp: Res;
features: Features;
forecast: Forecast;
forecastday: Forecastday[];
simpleforecast: Simpleforecast;
forecastday2: Forecastday2[];



  constructor(private weatherService: WeatherService) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.weatherService.getWeatherByGeoLocation(position.coords.latitude , position.coords.longitude ).subscribe((res) => {
          this.forecastday = res.forecast.txt_forecast.forecastday;
          this.forecastday2 = res.forecast.simpleforecast.forecastday;
          console.log(res);
          });
    }, this.showError);
    }
   }

  ngOnInit() {

  }

  getWeather() {
    console.log('Getting Weather for Fremont');

      this.weatherService.getWeatherByCity(this.txtState, this.txtCity).subscribe(
        (res) => {
          this.forecastday = res.forecast.txt_forecast.forecastday;
          this.forecastday2 = res.forecast.simpleforecast.forecastday;
          console.log( this.forecastday2);

      });
    }

showError(error) {
  switch (error.code) {
      case error.PERMISSION_DENIED:
          console.log('User denied the request for Geolocation.');
          break;
      case error.POSITION_UNAVAILABLE:
          console.log('Location information is unavailable.');
          break;
      case error.TIMEOUT:
          console.log('The request to get user location timed out.');
          break;
      case error.UNKNOWN_ERROR:
          console.log('An unknown error occurred.');
          break;
  }
}

}
