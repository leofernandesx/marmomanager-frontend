import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOrcamentosComponent } from './cadastrar-orcamentos.component';

describe('CadastrarOrcamentosComponent', () => {
  let component: CadastrarOrcamentosComponent;
  let fixture: ComponentFixture<CadastrarOrcamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarOrcamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarOrcamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
