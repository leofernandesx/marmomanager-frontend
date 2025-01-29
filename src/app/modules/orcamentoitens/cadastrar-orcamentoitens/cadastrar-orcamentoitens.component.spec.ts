import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOrcamentoItensComponent } from './cadastrar-orcamentoitens.component';

describe('CadastrarOrcamentoitensComponent', () => {
  let component: CadastrarOrcamentoItensComponent;
  let fixture: ComponentFixture<CadastrarOrcamentoItensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarOrcamentoItensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarOrcamentoItensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
