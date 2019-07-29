import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/Pet';
import { PetStoreService } from '../../services/pet-store.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

	pet: Pet;
  constructor( private router: Router , private petStoreService: PetStoreService) { 
	  this.pet = new Pet();
  }

  ngOnInit() {
  }
  onSubmit(){
		
	  this.petStoreService.savePet(this.pet ).subscribe (
			  data =>{
				  alert(this.pet.petName+' added successfully.');
				  this.router.navigate(['/home']);
			  },
			  error =>{
				  alert('Failed to add pet details.');
			  }
		);
  	}

}
