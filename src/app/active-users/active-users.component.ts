import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users: string[];

  onSetToInactive(id: number) {
    this.usersService.setToInactive(id);
  }

  ngOnInit(): void {
    this.users = this.usersService.activeUsers;
  }

}
