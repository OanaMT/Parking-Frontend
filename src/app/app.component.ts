import { Component, OnInit } from '@angular/core';
import { ParkingSpot } from './custom classes/parking-spot';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  title = 'parking';
  parkingSpots?: ParkingSpot[];

  addColor() {
    if (this.parkingSpots)
      this.parkingSpots.forEach((item) => {
        if (item.state == 'free') item.color = '#7A9B76';
        else {
          item.color = '#D34F4F';
        }
      });
  }

  ngOnInit(): void {
    this.parkingSpots = [
      { state: 'busy' },
      { state: 'busy' },
      { state: 'free' },
      { state: 'busy' },
    ];
    this.addColor();
  }
}
