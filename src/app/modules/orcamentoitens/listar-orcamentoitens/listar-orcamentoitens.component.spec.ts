import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOrcamentoitensComponent } from './listar-orcamentoitens.component';

describe('ListarOrcamentoitensComponent', () => {
  let component: ListarOrcamentoitensComponent;
  let fixture: ComponentFixture<ListarOrcamentoitensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarOrcamentoitensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarOrcamentoitensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
