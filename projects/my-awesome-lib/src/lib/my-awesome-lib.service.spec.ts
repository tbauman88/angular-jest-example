import { TestBed, inject } from '@angular/core/testing';

import { MyAwesomeLibService } from './my-awesome-lib.service';

describe('MyAwesomeLibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyAwesomeLibService]
    });
  });

  it('should be created', inject([MyAwesomeLibService], (service: MyAwesomeLibService) => {
    expect(service).toBeTruthy();
  }));
});
