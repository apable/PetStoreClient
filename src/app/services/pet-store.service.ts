import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Person } from '../models/person';
import { Pet } from '../models/pet';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class PetStoreService {

  constructor(private http: HttpClient) { }
  
  public savePerson (person  : Person) {
	  return this.http.post<Person> ('http://localhost:8080/persons', person);
  }
  public savePet (pet  : Pet) {
	  return this.http.post<Pet> ('http://localhost:8080/pets', pet);
  }
  public findAllPersons(): Observable<Person[]> {
	    return this.http.get<Person[]>('http://localhost:8080/persons');
	  }
  public findAllPets(): Observable<Pet[]> {
	    return this.http.get<Pet[]>('http://localhost:8080/pets');
	  }
  
  
  
  
}
