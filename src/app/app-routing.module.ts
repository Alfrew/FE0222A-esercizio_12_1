import { NgModule } from "@angular/core";
import { HomePage } from "./pages/home.page";
import { DetailPage } from "./post/detail.page";
import { ActivePostPage } from "./post/active-post.page";
import { InactivePostPage } from "./post/inactive-post.page";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
  },
  {
    path: "post",
    loadChildren: () => import("./post/post.module").then((m) => m.PostModule),
  },
  {
    path: "users",
    loadChildren: () => import("./users/users.module").then((m) => m.UsersModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
