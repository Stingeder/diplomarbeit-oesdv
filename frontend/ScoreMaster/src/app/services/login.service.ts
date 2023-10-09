import { Injectable } from '@angular/core';
import { RoutingService } from '../routing/routing.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username = "Julian Stingeder";
  password = "132123"
  type = 3;

  constructor(
    public routing: RoutingService,
  ) { }

  public login() {

  }

  public generateRandomString(): string {
    const charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?{[]}";
    let randomString = "";

    for (let i = 0; i < 20; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      randomString += charset[randomIndex];
    }

    return randomString;
  }

  public logout() {
    const lockedKey = this.generateRandomString();
    console.log(lockedKey);
    this.username = '';
    this.password = '';
    this.type = -1;
    localStorage.setItem("currUserKey", "-1");
    this.routing.goToLogin();
  }
}
