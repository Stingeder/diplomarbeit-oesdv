import { Injectable } from '@angular/core';
import { RoutingService } from '../routing/routing.service';
import { UserService } from '../api/user.service';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  username = "";
  password = "";
  type = -1;

  constructor(
    public routing: RoutingService,
    public userService: UserService,
  ) { }

  public login() {
    this.userService.getUserByName(this.username).subscribe(user => {
      console.log("works");
      console.log(this.username);
      if(user.password === this.password){
        this.type = user.type;
        console.log("works1");
        if(user.type === 0){
          this.routing.goToTournamentCreator();
          console.log("works2");
        }
      }

    })
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
