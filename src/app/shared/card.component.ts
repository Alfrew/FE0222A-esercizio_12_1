import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card",
  template: `
    <!-- <div class="mb-3" *ngIf="post.active" [ngClass]="changeCol(post)">
      <h5 class="card-header"><span highlight>Active post</span></h5>
      <div class="card-body">
        <h5 clas>{{ id }} - {{ title | uppercase }}</h5>
        <p class="card-text">{{ body }}</p>
        <button class="btn btn-secondary form-control mb-3" (click)="changeStatus(post)">Disattiva</button>
        <button class="btn btn-secondary form-control" [routerLink]="['/activePost', post.id]">Dettagli</button>
      </div>
    </div> -->
  `,
  styles: [],
})
export class CardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
