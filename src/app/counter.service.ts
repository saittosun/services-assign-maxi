import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  inactiveToActiveCounter = 0;
  activeToInactiveCounter = 0;

  constructor() { }

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('active to inactive: ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('inactive to active: ' + this.inactiveToActiveCounter);
  }
}
