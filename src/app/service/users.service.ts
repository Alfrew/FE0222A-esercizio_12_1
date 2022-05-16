import { Injectable } from "@angular/core";
import { User } from "../interface/user";

@Injectable({
  providedIn: "root",
})
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: "Christian",
      email: "pippolo@ciccio.com",
      ruolo: "user",
    },
    {
      id: 2,
      name: "Kevin",
      email: "kevin@deggi.com",
      ruolo: "user",
    },
    {
      id: 3,
      name: "Mauro",
      email: "maurone@fortissimo.com",
      ruolo: "admin",
    },
    {
      id: 4,
      name: "Carlo",
      email: "carlo@cicala.com",
      ruolo: "user",
    },
  ];

  constructor() {}

  getUsers(): User[] {
    return this.users;
  }
  getUser(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
