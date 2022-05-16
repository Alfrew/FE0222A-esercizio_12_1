import { NgModule } from "@angular/core";
import { UsersPage } from "./users.page";
import { UserComponent } from "./user.component";
import { Routes, RouterModule } from "@angular/router";
import { DeactivateGuard } from "../deactivate.guard";
import { AuthGuard } from "../auth.guard";

const routes: Routes = [
  {
    path: "",
    component: UsersPage,
    // canActivate:[AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ":id",
        component: UserComponent,
        canDeactivate: [DeactivateGuard],
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
})
export class UsersRoutingModule {}
