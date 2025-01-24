import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarInstalacoesComponent } from './editar-instalacoes.component';

describe('EditarInstalacoesComponent', () => {
  let component: EditarInstalacoesComponent;
  let fixture: ComponentFixture<EditarInstalacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditarInstalacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarInstalacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
