import { NgModule } from "@angular/core";
import { HomePage } from "./pages/home.page";
import { AppComponent } from "./app.component";
import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { NavbarComponent } from "./components/navbar.component";
import { HighlightDirective } from "./modules/highlight.directive";

@NgModule({
  declarations: [AppComponent, HomePage, NavbarComponent, HighlightDirective],
  imports: [BrowserModule, AppRoutingModule, SharedModule],
  // providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
