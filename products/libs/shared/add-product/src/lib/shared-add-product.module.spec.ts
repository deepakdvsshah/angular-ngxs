import { async, TestBed } from '@angular/core/testing';
import { SharedAddProductModule } from './shared-add-product.module';

describe('SharedAddProductModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedAddProductModule],
    }).compileComponents();
  }));

  // TODO: Add real tests here.
  //
  // NB: This particular test does not do anything useful.
  //     It does NOT check for correct instantiation of the module.
  it('should have a module definition', () => {
    expect(SharedAddProductModule).toBeDefined();
  });
});
