import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarInstalacoesComponent } from './listar-instalacoes.component';

describe('ListarInstalacoesComponent', () => {
  let component: ListarInstalacoesComponent;
  let fixture: ComponentFixture<ListarInstalacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarInstalacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarInstalacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
