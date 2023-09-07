import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { LoginService } from 'src/app/services/login.service';
import { RoutingService } from 'src/app/routing/routing.service';

@Component({
  selector: 'app-tournament-view',
  templateUrl: './tournament-view.component.html',
  styleUrls: ['./tournament-view.component.css']
})
export class TournamentViewComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    public routingService: RoutingService,
  ) { }

  ngOnInit(): void {
    if(this.loginService.type != 3){
      this.routingService.goToAccessDenied();
    }
  }

}
