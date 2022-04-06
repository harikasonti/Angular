import { TestBed } from '@angular/core/testing';

import { FeedbackOnBusinesshouseService } from './feedback-on-businesshouse.service';

describe('FeedbackOnBusinesshouseService', () => {
  let service: FeedbackOnBusinesshouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackOnBusinesshouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
