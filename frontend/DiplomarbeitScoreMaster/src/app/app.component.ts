import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ScoreMaster';

  constructor(private keycloakService: KeycloakService) {}

  onLogout(): void {
    this.keycloakService.logout(); // Use the appropriate method for your auth service
  }
}
