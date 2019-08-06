import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/Person';
import { Pet } from '../../models/Pet';

import { PetStoreService } from '../../services/pet-store.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators ,FormGroup } from "@angular/forms";


@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
	person : Person;
	pet : Pet;
	pets : Pet[];
	
  constructor( private router: Router , private petStoreService: PetStoreService , private formBuilder: FormBuilder) { 
	  this.person = new Person();
	  this.pet =  new Pet();

	  
	  this.petStoreService.findAllPets().subscribe (
			  data =>{
			        this.pets = data ;
			  },
			  error =>{
			//	  alert('Failed to fetch pets details.');
			  }
		);
  }
  
  selected(){}
  
  ngOnInit() {}
 
  onSubmit(){
	  this.petStoreService.savePerson(this.person ).subscribe (
			  data =>{
				  alert(this.person.personName+' added successfully.');
				  this.router.navigate(['/home']);
			  },
			  error =>{
				  alert('Failed to add person details.');
			  }
		);
  	}
}
