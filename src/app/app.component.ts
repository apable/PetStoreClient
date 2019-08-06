import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user';
import { Observable } from "rxjs";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    isLoggedIn : Observable<boolean>;

    title: string;
 
	constructor(  private router : Router  , public authenticationService : AuthenticationService ) {
    this.title = 'PetStoreClient';
    this.isLoggedIn = authenticationService.isLoggedIn();
   }
	
	
	
	
	
	
}