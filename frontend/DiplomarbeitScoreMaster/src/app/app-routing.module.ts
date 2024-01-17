import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { TestComponent } from './components/test/test.component';
import { RoleGuard } from './role.guard';
import { EventCreatorComponent } from './components/event-creator/event-creator.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'event-creator',
    component: EventCreatorComponent,
    canActivate: [RoleGuard],
    data: { requiredRoles: ['master'] }
  },
  {
    path: 'test',
    component: TestComponent,
  },
  {
    path: 'forbidden',
    component: ForbiddenComponent,
  },
  {
    path: 'home',
    component: HomepageComponent,
    canActivate: [RoleGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
