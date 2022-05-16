import { NgModule } from "@angular/core";
import { AuthGuard } from "../auth.guard";
import { DetailPage } from "./detail.page";
import { ActivePostPage } from "./active-post.page";
import { RouterModule, Routes } from "@angular/router";
import { InactivePostPage } from "./inactive-post.page";

const routes: Routes = [
  {
    path: "active",
    component: ActivePostPage,
  },
  {
    path: "inactive",
    component: InactivePostPage,
    canActivate: [AuthGuard],
  },
  {
    path: "active/:id",
    component: DetailPage,
  },
  {
    path: "inactive/:id",
    component: DetailPage,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
