import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOrcamentoitensComponent } from './cadastrar-orcamentoitens.component';

describe('CadastrarOrcamentoitensComponent', () => {
  let component: CadastrarOrcamentoitensComponent;
  let fixture: ComponentFixture<CadastrarOrcamentoitensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarOrcamentoitensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarOrcamentoitensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
