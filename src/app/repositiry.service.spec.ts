import { TestBed } from '@angular/core/testing';

import { RepositiryService } from './recipe.repositiry';

describe('RepositiryService', () => {
  let service: RepositiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepositiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
