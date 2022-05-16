import { Injectable } from "@angular/core";
import { Ipost } from "../interface/post";

@Injectable({
  providedIn: "root",
})
export class PostService {
  private posts: Ipost[] = [
    {
      id: 1,
      body: "Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consect",
      title: "Le elezioni proseguono",
      active: true,
      category: "Politic",
      author: "Christian",
    },
    {
      id: 2,
      body: "Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consect",
      title: "Ricetta per la pizza napoletana",
      active: false,
      category: "Cooking",
      author: "Kevin",
    },
    {
      id: 3,
      body: "Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consect",
      title: "Calciatore espulso per droga",
      active: false,
      category: "Sport",
      author: "Mauro",
    },
    {
      id: 4,
      body: "Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consectetur, nisl nunc ultrices eros, eu porttitor nisl nunc eget lorem. Donec euismod, nisl eget aliquam consect",
      title: "Zuppa di fagioli",
      active: true,
      category: "Cooking",
      author: "Carlo",
    },
  ];

  constructor() {}

  getPosts(): Ipost[] {
    return this.posts;
  }
  getPost(id: number) {
    return this.posts.find((post) => post.id === id);
  }
}
