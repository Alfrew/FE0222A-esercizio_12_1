import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-navbar",
  template: `
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" routerLink="/" [routerLinkActiveOptions]="{ exact: true }" routerLinkActive="active">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/post/inactive" routerLinkActive="active">Inactive Post</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/post/active" routerLinkActive="active">Active Post</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" routerLink="/users" routerLinkActive="active">Users</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: [],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
