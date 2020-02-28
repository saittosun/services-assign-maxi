import { CounterService } from './counter.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  
  constructor(private counterService: CounterService) { }

  setToActive(id: number) {
    this.activeUsers.push(this.activeUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.inactiveUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

}
