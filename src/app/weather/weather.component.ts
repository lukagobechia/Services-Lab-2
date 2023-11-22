import { Component, OnInit } from '@angular/core';
import { Place } from '../place';
import { AirPressureService } from '../Services/air-pressure.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  Places: Place[] = [
    {name: "Paris", altitude: 50},
    {name: "Zugdidi", altitude: 180}
  ];

  constructor(private pressure: AirPressureService){}

  ngOnInit(): void {
      this.pressure.setPlace(this.Places);
  }
  // sendData(){
  //   this.pressure.setPlace(this.Places);
  // }
  Display(){
    this.pressure.getPlace();
  }
}
