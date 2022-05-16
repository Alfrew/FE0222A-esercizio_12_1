import { NgModule } from "@angular/core";
import { DetailPage } from "./detail.page";
import { ActivePostPage } from "./active-post.page";
import { SharedModule } from "../shared/shared.module";
import { InactivePostPage } from "./inactive-post.page";
import { PostRoutingModule } from "./post-routing.module";

@NgModule({
  declarations: [InactivePostPage, ActivePostPage, DetailPage],
  imports: [PostRoutingModule, SharedModule],
})
export class PostModule {}
