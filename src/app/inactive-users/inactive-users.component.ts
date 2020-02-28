import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  users: string[];

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }
  
  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
  }

}
