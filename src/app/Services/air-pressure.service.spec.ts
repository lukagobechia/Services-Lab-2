import { TestBed } from '@angular/core/testing';

import { AirPressureService } from './air-pressure.service';

describe('AirPressureService', () => {
  let service: AirPressureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirPressureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
