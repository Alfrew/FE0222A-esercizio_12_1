import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs";
import { User } from "../interface/user";
import { UsersService } from "../service/users.service";

@Component({
  selector: "app-user",
  template: `
    <ng-container *ngIf="user">
      <div class="card mt-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">{{ user.name | titlecase }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Role: {{ user.ruolo }}</h6>
          <p class="card-text">Email: {{ user.email }}</p>
        </div>
      </div>
      <button (click)="canEdit = true">Change</button>
      <div *ngIf="canEdit">
        <input type="text" />
        <input type="text" />
      </div>
    </ng-container>
  `,
  styles: [],
})
export class UserComponent implements OnInit {
  user!: User | undefined;
  sub!: Subscription;
  canEdit: boolean = false;
  constructor(private router: ActivatedRoute, private userSrv: UsersService) {}

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
      const id = +params["id"];
      this.user = this.userSrv.getUser(id);
    });
  }

  canDeactivate() {
    if (!this.canEdit) {
      return true;
    }
    return confirm("Are you sure to leave? You'll lose all your changes");
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
