import { TestBed } from '@angular/core/testing';

import { NgxPincodeInputService } from './ngx-pincode-input.service';

describe('NgxPincodeInputService', () => {
  let service: NgxPincodeInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxPincodeInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
