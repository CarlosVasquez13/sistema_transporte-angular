import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainColaboradorComponent } from './main-colaborador.component';

describe('MainColaboradorComponent', () => {
  let component: MainColaboradorComponent;
  let fixture: ComponentFixture<MainColaboradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainColaboradorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
