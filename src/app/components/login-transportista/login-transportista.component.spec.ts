import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginTransportistaComponent } from './login-transportista.component';

describe('LoginTransportistaComponent', () => {
  let component: LoginTransportistaComponent;
  let fixture: ComponentFixture<LoginTransportistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginTransportistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginTransportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
