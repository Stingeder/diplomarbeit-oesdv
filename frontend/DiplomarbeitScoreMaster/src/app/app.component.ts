import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ScoreMaster';
  isEventCreatorPage = false;
  currentComponent: string | null = null;

  constructor(
    private keycloakService: KeycloakService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.getCurrentComponent();
    });
  }

  getCurrentComponent() {
    let route = this.activatedRoute;
    while (route.firstChild) {
      route = route.firstChild;
    }
    this.currentComponent = route.component ? (route.component['name'] || null) : null;
  }

  onRedirectToDanceTypes() {
    this.router.navigateByUrl('/dance-types');
  }

  onLogout(): void {
    this.keycloakService.logout();
  }
}
