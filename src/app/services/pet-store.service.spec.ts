import { TestBed } from '@angular/core/testing';

import { PetStoreService } from './pet-store.service';

describe('PetStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PetStoreService = TestBed.get(PetStoreService);
    expect(service).toBeTruthy();
  });
});
