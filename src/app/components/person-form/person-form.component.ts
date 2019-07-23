import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/Person';
import { PetStoreService } from '../../services/pet-store.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {

	person : Person;
  constructor( private router: Router , private petStoreService: PetStoreService) { 
	  this.person = new Person();
  }

  ngOnInit() {
  }
  
  onSubmit(){
		
	  this.petStoreService.savePerson(this.person ).subscribe (
			  data =>{
				  this.router.navigate(['/home']);
			  },
			  error =>{
				  
			  }
		);
  	}
}
