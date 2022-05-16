import { NgModule } from "@angular/core";
import { UsersPage } from "./users.page";
import { UserComponent } from "./user.component";
import { UsersRoutingModule } from "./users-routing.module";
import { SharedModule } from "../shared/shared.module";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [UsersPage, UserComponent],
  imports: [UsersRoutingModule, SharedModule],
})
export class UsersModule {}
