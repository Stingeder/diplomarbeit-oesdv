import { Component, OnInit } from '@angular/core';
import { UserService } from './api/user.service';
import { RoutingService } from './routing/routing.service';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ScoreMaster';

  constructor() {}

}
