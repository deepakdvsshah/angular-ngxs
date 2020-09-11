import { TestBed } from '@angular/core/testing';

import { ProductListViewService } from './product-list-view.service';

describe('ListViewService', () => {
  let service: ProductListViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
