import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarPrecoComponent } from './cadastrar-preco.component';

describe('CadastrarPrecoComponent', () => {
  let component: CadastrarPrecoComponent;
  let fixture: ComponentFixture<CadastrarPrecoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarPrecoComponent]
    });
    fixture = TestBed.createComponent(CadastrarPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
