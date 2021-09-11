import { TestBed } from '@angular/core/testing';

import { PnyStoresService } from './pny-stores.service';

describe('PnyStoresService', () => {
  let service: PnyStoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PnyStoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
