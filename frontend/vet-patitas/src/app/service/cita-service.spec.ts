import { TestBed } from '@angular/core/testing';
import { CitaService } from './cita-service';

describe('CitaService', () => {
  let service: CitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CitaService)
  });
  it('should create an instance', () => {
    expect(service).toBeTruthy();
  });
});
