import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  template: `
    <h1 class="card-header"><span highlight>Welcome</span> to the home page</h1>
    <div class="mt-5 d-flex justify-content-around">
      <button class="btn btn-primary" (click)="postInactive()">Go to inactive post</button>
      <button class="btn btn-primary" (click)="postActive()">Go to active post</button>
    </div>
  `,
  styles: [],
})
export class HomePage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  postActive() {
    this.router.navigate(["/post/active"]);
  }
  postInactive() {
    this.router.navigate(["/post/inactive"]);
  }
}
