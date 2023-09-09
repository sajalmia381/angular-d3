import { TestBed } from '@angular/core/testing';

import { VisualizationApiService } from './visualization-api.service';

describe('VisualizationApiService', () => {
  let service: VisualizationApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualizationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
