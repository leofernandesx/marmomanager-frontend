import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarInstalacoesComponent } from './cadastrar-instalacoes.component';

describe('CadastrarInstalacoesComponent', () => {
  let component: CadastrarInstalacoesComponent;
  let fixture: ComponentFixture<CadastrarInstalacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastrarInstalacoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastrarInstalacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
