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
export const BASE_URL = new InjectionToken<string>('BaseUrl');


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TournamentCreatorComponent,
    TournamentViewComponent,
    AccessDeniedComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [{provide: BASE_URL, useValue: 'http://localhost:5000'}], // http://172.17.214.11:5000
  bootstrap: [AppComponent]
})
export class AppModule { }
