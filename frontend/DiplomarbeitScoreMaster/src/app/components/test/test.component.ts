import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrl: './test.component.scss'
})
export class TestComponent implements OnInit {

  constructor(private keycloakService: KeycloakService) {}

  ngOnInit() {
    console.log(this.keycloakService.getKeycloakInstance().loadUserInfo());
  }
}
