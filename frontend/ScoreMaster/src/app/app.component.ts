import { Component, OnInit } from '@angular/core';
import { UserService } from './api/user.service';
import { RoutingService } from './routing/routing.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ScoreMaster';

  constructor(
    public userService: UserService,
    public loginService: LoginService,
    public routing: RoutingService
  ) {}

  ngOnInit(): void {
    let username = localStorage.getItem("username");
    if(username !== null){
      this.userService.getConnectionStringByUsername(username).subscribe((user) => {
        if(localStorage.getItem("connectionString") !== user.connectionString){
          this.routing.goToLogin();
        }
      });
    }
  }
}
