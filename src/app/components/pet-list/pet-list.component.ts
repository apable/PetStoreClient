import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/Pet';
import { PetStoreService } from '../../services/pet-store.service';

@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.css']
})
export class PetListComponent  implements OnInit{

	  pets: Pet[];
	 
	  constructor(private petStoreService: PetStoreService) {
	  }
	 
	  ngOnInit() {
	    this.petStoreService.findAllPets().subscribe(data => {
	      this.pets = data;
	    });
	  }

}
