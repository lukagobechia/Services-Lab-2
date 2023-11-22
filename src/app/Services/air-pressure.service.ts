import { Injectable } from '@angular/core';
import { Place } from '../place';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class AirPressureService {

  places: any = [];

  constructor(private logger: LoggerService) { }

  getPlace() {
   this.logger.display(this.places);
  }
  setPlace(p: any) {
    this.places = p;
  }

  calculatePressure(){
    const pressureLevels: string[] = [];

    if (this.places) {
      this.places.forEach((place:Place) => {
        if (place.altitude > 300) {
          pressureLevels.push(place.name +' has low pressure');
        } else if (place.altitude >= 100 && place.altitude <= 200) {
          pressureLevels.push(place.name +' has medium pressure');
        } else {
          pressureLevels.push(place.name + ' has high pressure');
        }
      });
    }

    return pressureLevels;
  
  }
}
