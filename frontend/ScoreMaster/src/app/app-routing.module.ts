import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { TournamentCreatorComponent } from './components/tournament-creator/tournament-creator.component';
import { TournamentViewComponent } from './components/tournament-view/tournament-view.component';
import { AccessDeniedComponent } from './components/access-denied/access-denied.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'tournament_creator', component: TournamentCreatorComponent },
  { path: 'tournament_view', component: TournamentViewComponent },
  { path: 'access_denied', component: AccessDeniedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
