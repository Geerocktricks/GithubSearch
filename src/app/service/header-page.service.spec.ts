import { TestBed } from '@angular/core/testing';

import { HeaderPageService } from './header-page.service';

describe('ServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderPageService = TestBed.get(HeaderPageService);
    expect(service).toBeTruthy();
  });
});
