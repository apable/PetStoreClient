import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/Person';
import { PetStoreService } from '../../services/pet-store.service';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent  implements OnInit{
	 persons: Person[];

	constructor(private petStoreService: PetStoreService) {
	}
	
	ngOnInit() {
	  this.petStoreService.findAllPersons().subscribe(data => 
	  {
	    this.persons = data;
	  },
	  error =>{
		  alert('Unable to find records.');
	  }
	  );
	}

}
