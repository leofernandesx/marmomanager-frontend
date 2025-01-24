import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrcamentoitensComponent } from './editar-orcamentoitens.component';

describe('EditarOrcamentoitensComponent', () => {
  let component: EditarOrcamentoitensComponent;
  let fixture: ComponentFixture<EditarOrcamentoitensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarOrcamentoitensComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOrcamentoitensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
