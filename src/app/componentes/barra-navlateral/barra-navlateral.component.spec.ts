import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraNavlateralComponent } from './barra-navlateral.component';

describe('BarraNavlateralComponent', () => {
  let component: BarraNavlateralComponent;
  let fixture: ComponentFixture<BarraNavlateralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraNavlateralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarraNavlateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
