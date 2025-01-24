import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOrcamentosComponent } from './editar-orcamentos.component';

describe('EditarOrcamentosComponent', () => {
  let component: EditarOrcamentosComponent;
  let fixture: ComponentFixture<EditarOrcamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarOrcamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOrcamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
