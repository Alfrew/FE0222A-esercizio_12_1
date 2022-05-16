import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "../auth.guard";
import { ActivePostPage } from "./active-post.page";
import { DetailPage } from "./detail.page";
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
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
