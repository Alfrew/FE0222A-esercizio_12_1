import { Subscription } from "rxjs";
import { Ipost } from "../interface/post";
import { Component, OnInit } from "@angular/core";
import { PostService } from "../service/post.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  template: `<ng-container *ngIf="post">
    <div class="container mt-5">
      <h5 class="card-header">{{ post.id }} - {{ post.title | uppercase }}</h5>
      <div class="card-body">
        <p class="card-text">{{ post.body }}</p>
        <p>Category: {{ post.category }}</p>
        <p>Author: {{ post.author }}</p>
      </div>
    </div>
  </ng-container> `,
  styles: [],
})
export class DetailPage implements OnInit {
  post!: Ipost | undefined;
  sub!: Subscription;
  constructor(private router: ActivatedRoute, private postSrv: PostService) {}

  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
      const id = +params["id"];
      this.post = this.postSrv.getPost(id);
    });
  }
}
