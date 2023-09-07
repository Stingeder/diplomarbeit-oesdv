import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RoutingService } from 'src/app/routing/routing.service';
import { LoginService } from 'src/app/services/login.service';
import { TournamentCreatorService } from 'src/app/services/tournament-creator.service';

@Component({
  selector: 'app-tournament-creator',
  templateUrl: './tournament-creator.component.html',
  styleUrls: ['./tournament-creator.component.css']
})


export class TournamentCreatorComponent implements OnInit {

  constructor(
    public loginService: LoginService,
    public tournamentCreatorService: TournamentCreatorService,
    public routingService: RoutingService,
  ) { }


  ngOnInit(): void {
    if(this.loginService.type != 3){
      this.routingService.goToAccessDenied();
    }
  }

}
