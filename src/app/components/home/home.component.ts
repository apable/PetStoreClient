import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

import { User } from '../../models/user';
import { UserService} from '../../services/user.service';
import {  AuthenticationService} from '../../services/authentication.service';
import { Observable } from "rxjs";
@Component({ templateUrl: 'home.component.html' })
export class HomeComponent  {
	  isLoggedIn : Observable<boolean>;

	  constructor( public authenticationService : AuthenticationService ) {
		    this.isLoggedIn = authenticationService.isLoggedIn();
		  }
}