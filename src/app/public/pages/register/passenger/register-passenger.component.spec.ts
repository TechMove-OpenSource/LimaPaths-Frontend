import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPassengerComponent } from './register-passenger.component';

describe('PassengerComponent', () => {
  let component: RegisterPassengerComponent;
  let fixture: ComponentFixture<RegisterPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPassengerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
