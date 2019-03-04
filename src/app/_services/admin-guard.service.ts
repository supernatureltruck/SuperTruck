import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { Auth } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{

  constructor(private router: Router, private auth: Auth) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (!this.auth.isAuthentificated) {
      this.router.navigate(['/gcommande']);
    } 
     return this.auth.isAuthentificated;
  }
}
