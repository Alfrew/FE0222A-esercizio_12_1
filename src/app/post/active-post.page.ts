import { Component, OnInit } from "@angular/core";
import { Ipost } from "../interface/post";
import { CategoryService } from "../service/category.service";
import { PostService } from "../service/post.service";

@Component({
  template: `
    <div class="container mt-5">
      <div *ngFor="let post of posts">
        <div class="mb-3" *ngIf="post.active" [ngClass]="changeCol(post)">
          <h5 class="card-header"><span highlight>Active post</span></h5>
          <div class="card-body">
            <h5 clas>{{ post.id }} - {{ post.title | uppercase }}</h5>
            <p class="card-text">{{ post.body }}</p>
            <button class="btn btn-secondary form-control mb-3" (click)="changeStatus(post)">Disattiva</button>
            <button class="btn btn-secondary form-control" [routerLink]="['/post/active', post.id]">Dettagli</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ActivePostPage implements OnInit {
  posts: Ipost[] = [];

  constructor(private catSrv: CategoryService, private postSrv: PostService) {
    this.posts = this.postSrv.getPosts();
  }
  changeCol(post: Ipost) {
    return this.catSrv.categorie(post);
  }
  changeStatus(post: Ipost) {
    return this.catSrv.status(post);
  }
  ngOnInit(): void {}
}
