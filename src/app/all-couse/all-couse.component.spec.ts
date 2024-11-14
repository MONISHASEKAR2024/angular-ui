import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCouseComponent } from './all-couse.component';

describe('AllCouseComponent', () => {
  let component: AllCouseComponent;
  let fixture: ComponentFixture<AllCouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
