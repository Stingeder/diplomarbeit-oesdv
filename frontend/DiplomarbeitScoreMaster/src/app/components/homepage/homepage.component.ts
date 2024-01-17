import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{

  constructor(private router: Router, private keycloakService: KeycloakService) {}

  ngOnInit(): void {
    this.redirectUserBasedOnRole();
  }

  private redirectUserBasedOnRole(): void {
    if (!this.keycloakService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return;
    }

    const roles = this.keycloakService.getUserRoles(true);

    if (roles.includes('master')) {
      this.router.navigate(['/event-creator']);
    } else if (roles.includes('evaluator')) {
      this.router.navigate(['/test']);
    } else {
      this.router.navigate(['/home']);
    }
  }
}
