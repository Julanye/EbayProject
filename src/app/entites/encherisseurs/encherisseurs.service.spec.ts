import { TestBed } from '@angular/core/testing';

import { EncherisseursService } from './encherisseurs.service';

describe('EncherisseursService', () => {
  let service: EncherisseursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncherisseursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
