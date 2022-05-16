import { NgModule } from "@angular/core";

import { PostRoutingModule } from "./post-routing.module";
import { SharedModule } from "../shared/shared.module";
import { InactivePostPage } from "./inactive-post.page";
import { ActivePostPage } from "./active-post.page";
import { DetailPage } from "./detail.page";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [InactivePostPage, ActivePostPage, DetailPage],
  imports: [PostRoutingModule, SharedModule],
})
export class PostModule {}
