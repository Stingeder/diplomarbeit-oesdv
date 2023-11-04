import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/routing/routing.service';
import { LoginService } from 'src/app/services/login.service';
import { Subscription } from 'rxjs';
import { TournamentCreatorService } from 'src/app/services/tournament-creator.service';
import { UserService } from 'src/app/api/user.service';

@Component({
  selector: 'app-tournament-creator',
  templateUrl: './tournament-creator.component.html',
  styleUrls: ['./tournament-creator.component.css']
})
export class TournamentCreatorComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    public routingService: RoutingService,
    public tournamentCreatorService: TournamentCreatorService,
    public userService: UserService,
    public routing: RoutingService
  ) { }

  ngOnInit(): void {

  }

}
