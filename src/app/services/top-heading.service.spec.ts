import { TestBed } from '@angular/core/testing';

import { TopHeadingService } from './top-heading.service';

describe('TopHeadingService', () => {
  let service: TopHeadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopHeadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
