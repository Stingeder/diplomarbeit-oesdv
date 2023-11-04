import { Injectable } from '@angular/core';
import { RoutingService } from '../routing/routing.service';
import { UserService } from '../api/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';


interface ConnectionString {
  id: number;
  connectionString: string;
}

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
    public snackBar: MatSnackBar
  ) { }

  public login() {
    this.userService.getUserByName(this.username).pipe(
        catchError(error => {
            this.openSnackBar("Wrong Username Or Password");
            return throwError(error);
        })
    ).subscribe(user => {
        console.log(this.username);
        if(user.password === this.password) {
            this.type = user.type;
            let connectionString: ConnectionString = {
              id: user.id,
              connectionString: this.generateRandomString()
            };
            localStorage.setItem("connectionString", connectionString.connectionString);
            localStorage.setItem("username", user.username);
            this.userService.updateConnectionStringUser(connectionString).subscribe();
            if(user.type === 0) {
                this.routing.goToTournamentView();
            }
            else if(user.type === 3){
              this.routing.goToTournamentCreator();
            }
        } else {
            this.openSnackBar("Wrong Username Or Password");
        }
    });
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

  openSnackBar(message: string, action: string = 'OK') {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }
}
