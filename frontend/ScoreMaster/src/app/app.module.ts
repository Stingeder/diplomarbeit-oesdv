import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { TournamentCreatorComponent } from './components/tournament-creator/tournament-creator.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from './material/material.module';
import { TournamentViewComponent } from './components/tournament-view/tournament-view.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { TestComponent } from './components/test/test/test.component';
import { HttpClientModule } from '@angular/common/http';;
export const BASE_URL = new InjectionToken<string>('BaseUrl');

import { AuthModule } from '@auth0/auth0-angular';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TournamentCreatorComponent,
    TournamentViewComponent,
    AccessDeniedComponent,
    TestComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-7j8b3g4wvxo3ziq7.us.auth0.com',
      clientId: 'yZeqXFl9N1HTNPPmTOym2d9HFLjqtnhB',
      authorizationParams: {
        redirect_uri: `${window.location.origin}/tournament-creator`
      }
    }),
  ],
  providers: [{provide: BASE_URL, useValue: 'http://localhost:5158'}], // http://172.17.214.11:5000
  bootstrap: [AppComponent],
})
export class AppModule {}
