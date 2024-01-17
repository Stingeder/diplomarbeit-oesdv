import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router, private keycloakService: KeycloakService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const requiredRoles = route.data['requiredRoles'] as string[];

    // Check if the user is authenticated
    if (this.keycloakService.isLoggedIn()) {
      const userRoles = this.keycloakService.getUserRoles();

      // Allow access if no roles are required
      if (!requiredRoles || requiredRoles.length === 0) {
        return true;
      }

      // Check if the user has any of the required roles
      const hasRequiredRole = requiredRoles.some((role) => userRoles.includes(role));

      if (hasRequiredRole) {
        // User has the required role, allow access
        return true;
      } else {
        // User does not have the required role, redirect them to a forbidden page or another route
        return this.router.createUrlTree(['/forbidden']);
      }
    } else {
      // User is not authenticated, redirect to the login page
      return this.router.createUrlTree(['/login']);
    }
  }
}
