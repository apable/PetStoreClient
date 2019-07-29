import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,CanActivate ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements  CanActivate {
	
	url : string;
	constructor(private router : Router , private authenticationService : AuthenticationService)
	{
		
	}
	private handleAuthState():boolean
	{
		if(this.isLogin())
		{
			this.router.navigate(['/home']);
			return false;
		}
		return true  ;
		
	}
	private handleNotAuthState():boolean
	{
		if(this.isLogin())
		{
			this.router.navigate(['/login']);
			return false;
		}
		return  false ;
	}
	private isLogin() : boolean
	{
		if(this.url.includes('/login'))
		{ return true;}
		
		return false;
	}
	canActivate(next:ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<boolean>|Promise<boolean>|boolean 
	{
		this.url = state.url;
		if(this.authenticationService.isLoggedIn())
		{
//			return	this.handleAuthState();
		      return true;
		}
		else
		{
//			return this.handleNotAuthState();
		      this.router.navigate(["login"]);
		      return false;
		}
	}
}
