import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    public router: Router
  ) { }

  public goToTournamentView(){
    this.router.navigate(['/tournament_view']);
  }

  public goToTournamentCreator(){
    this.router.navigate(['/tournament_creator']);
  }

  public goToAccessDenied(){
    this.router.navigate(['/access_denied']);
  }

  public goToLogin(){
    this.router.navigate(['/login']);
  }
}
