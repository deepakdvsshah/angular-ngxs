import { async, TestBed } from '@angular/core/testing';
import { SharedProductListModule } from './shared-product-list.module';

describe('SharedProductListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedProductListModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SharedProductListModule).toBeDefined();
  });
});
