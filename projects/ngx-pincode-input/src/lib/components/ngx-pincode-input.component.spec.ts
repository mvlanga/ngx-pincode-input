import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxPincodeInputComponent } from './ngx-pincode-input.component';

describe('NgxPincodeInputComponent', () => {
  let component: NgxPincodeInputComponent;
  let fixture: ComponentFixture<NgxPincodeInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxPincodeInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxPincodeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
