import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar.component";
import { HomePage } from "./pages/home.page";
import { HighlightDirective } from "./modules/highlight.directive";
import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [AppComponent, HomePage, NavbarComponent, HighlightDirective],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  // providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
