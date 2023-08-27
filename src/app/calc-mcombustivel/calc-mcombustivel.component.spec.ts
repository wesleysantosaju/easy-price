import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcMcombustivelComponent } from './calc-mcombustivel.component';

describe('CalcMcombustivelComponent', () => {
  let component: CalcMcombustivelComponent;
  let fixture: ComponentFixture<CalcMcombustivelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalcMcombustivelComponent]
    });
    fixture = TestBed.createComponent(CalcMcombustivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
