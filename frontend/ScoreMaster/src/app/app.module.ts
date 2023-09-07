import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TournamentCreatorComponent,
    TournamentViewComponent,
    AccessDeniedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
