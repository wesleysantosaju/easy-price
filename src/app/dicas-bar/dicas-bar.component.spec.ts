import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicasBarComponent } from './dicas-bar.component';

describe('DicasBarComponent', () => {
  let component: DicasBarComponent;
  let fixture: ComponentFixture<DicasBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DicasBarComponent]
    });
    fixture = TestBed.createComponent(DicasBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
