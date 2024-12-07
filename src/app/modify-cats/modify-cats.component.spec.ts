import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyCatsComponent } from './modify-cats.component';

describe('ModifyCatsComponent', () => {
  let component: ModifyCatsComponent;
  let fixture: ComponentFixture<ModifyCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyCatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
