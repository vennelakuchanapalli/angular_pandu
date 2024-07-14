import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashbaoardComponent } from './dashbaoard.component';

describe('DashbaoardComponent', () => {
  let component: DashbaoardComponent;
  let fixture: ComponentFixture<DashbaoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashbaoardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashbaoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
