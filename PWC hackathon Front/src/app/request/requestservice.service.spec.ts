import { TestBed, inject } from '@angular/core/testing';

import { RequestserviceService } from './requestservice.service';

describe('RequestserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestserviceService]
    });
  });

  it('should be created', inject([RequestserviceService], (service: RequestserviceService) => {
    expect(service).toBeTruthy();
  }));
});
