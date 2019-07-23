import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {  AuthenticationService} from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user :User ;

  constructor( private router : Router  , private authenticationService :AuthenticationService) {
	  this.user = new User();
  }

  ngOnInit() {
  }

  onSubmit(){
	
	  this.authenticationService.login( this.user.username , this.user.password ).subscribe (
			  data =>{
				  this.router.navigate(['/home']);
			  },
			  error =>{
				  
			  }
		);
  	}
}
