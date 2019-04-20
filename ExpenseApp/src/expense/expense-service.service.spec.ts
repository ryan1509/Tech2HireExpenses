import { TestBed, inject } from '@angular/core/testing';

import { ExpenseServiceService } from './expense-service.service';

describe('ExpenseServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExpenseServiceService]
    });
  });

  it('should be created', inject([ExpenseServiceService], (service: ExpenseServiceService) => {
    expect(service).toBeTruthy();
  }));
});
