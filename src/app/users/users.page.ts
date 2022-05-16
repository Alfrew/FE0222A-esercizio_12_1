import { Component, OnInit } from "@angular/core";
import { User } from "../interface/user";
import { UsersService } from "../service/users.service";

@Component({
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let user of users" [routerLink]="['/users', user.id]">{{ user.name | titlecase }}</li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class UsersPage implements OnInit {
  users!: User[];
  constructor(private userSrv: UsersService) {
    this.users = this.userSrv.getUsers();
  }

  ngOnInit(): void {}
}
