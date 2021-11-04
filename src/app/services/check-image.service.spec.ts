import { TestBed } from '@angular/core/testing';

import { CheckImageService } from './check-image.service';

describe('CheckImageService', () => {
  let service: CheckImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
