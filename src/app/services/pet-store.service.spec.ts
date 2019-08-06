import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PetStoreService } from './pet-store.service';
import { HttpClientModule } from '@angular/common/http';

describe('PetStoreService', () => {
  beforeEach(() =>{ TestBed.configureTestingModule({ imports: [ HttpClientModule, ]}).compileComponents();});

  it('should be created', () => {
    const service: PetStoreService = TestBed.get(PetStoreService);
    expect(service).toBeTruthy();
  });
});
