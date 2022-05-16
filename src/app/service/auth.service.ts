import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  logged = false;

  constructor() {}

  isAuthenticated() {
    return new Promise((res, rej) => {
      setTimeout(() => {
        res(this.logged);
      }, 1000);
    });
  }

  login() {
    this.logged = true;
  }
  logout() {
    this.logged = false;
  }
}
