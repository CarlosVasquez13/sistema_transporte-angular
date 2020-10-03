import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginColaboradorComponent } from './login-colaborador.component';

describe('LoginColaboradorComponent', () => {
  let component: LoginColaboradorComponent;
  let fixture: ComponentFixture<LoginColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
