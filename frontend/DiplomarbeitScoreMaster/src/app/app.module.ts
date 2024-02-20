import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_INITIALIZER } from '@angular/core';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { TestComponent } from './components/test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { EventCreatorComponent } from './components/event-creator/event-creator.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CreateParticipantDialogComponent } from './dialogs/create-participant-dialog/create-participant-dialog.component';
import { FormsModule } from '@angular/forms';

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/', // Keycloak server URL
        realm: 'diplomarbeit', // Your realm
        clientId: 'diplomarbeit-client', // Your client ID
      },
      initOptions: {
        onLoad: 'login-required',
        redirectUri: window.location.origin + '/home',
        checkLoginIframe: false
      },
    });
}

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EventCreatorComponent,
    ForbiddenComponent,
    HomepageComponent,
    CreateParticipantDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KeycloakAngularModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
