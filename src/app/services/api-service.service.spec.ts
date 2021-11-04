import { TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';

import { ApiServiceService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ApiServiceService;

  beforeEach(() => {
    class Service{

    }
    TestBed.configureTestingModule({
      imports:[
        HttpClientModule,
      ],

    });
    service = TestBed.inject(ApiServiceService,);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
});
