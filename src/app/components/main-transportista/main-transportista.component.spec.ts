import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTransportistaComponent } from './main-transportista.component';

describe('MainTransportistaComponent', () => {
  let component: MainTransportistaComponent;
  let fixture: ComponentFixture<MainTransportistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTransportistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTransportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
