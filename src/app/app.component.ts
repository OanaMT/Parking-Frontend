import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ParkingSpot } from './custom classes/parking-spot';
import { PinStates } from './custom classes/pin-states';
import { PinStateService } from './pinstate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  constructor(private pinstateService: PinStateService) {}
  title = 'parking';
  parkingSpots?: ParkingSpot[];
  Pinstates?: PinStates[];
  PinstatesSub?: Subscription;

  addColor() {
    if (this.parkingSpots)
      this.parkingSpots.forEach((item) => {
        if (item.state == 'free') item.color = '#7A9B76';
        else {
          item.color = '#D34F4F';
        }
      });
  }

  checkAvailableParkingSpots() {
    this.PinstatesSub = this.pinstateService
      .getPinStates()
      .subscribe((result) => {
        this.Pinstates = result;
      });
    if (this.Pinstates) this.addColorFromPins(this.Pinstates);
  }

  addColorFromPins(pinstates: PinStates[]) {
    console.log(pinstates);
    if (this.parkingSpots) {
      if (pinstates[0].pin1 === 1) {
        this.parkingSpots[0].color = '#D34F4F';
      } else {
        this.parkingSpots[0].color = '#7A9B76';
      }
      if (pinstates[0].pin2 === 1) {
        this.parkingSpots[1].color = '#D34F4F';
      } else {
        this.parkingSpots[1].color = '#7A9B76';
      }
      if (pinstates[0].pin3 === 1) {
        this.parkingSpots[2].color = '#D34F4F';
      } else {
        this.parkingSpots[2].color = '#7A9B76';
      }
      if (pinstates[0].pin4 === 1) {
        this.parkingSpots[3].color = '#D34F4F';
      } else {
        this.parkingSpots[3].color = '#7A9B76';
      }
    }
  }

  ngOnInit(): void {
    this.parkingSpots = [
      { state: 'busy' },
      { state: 'busy' },
      { state: 'free' },
      { state: 'busy' },
    ];
    this.checkAvailableParkingSpots();
  }
}
