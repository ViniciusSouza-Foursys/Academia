import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeCadastroComponent } from './modalidade-cadastro.component';

describe('ModalidadeCadastroComponent', () => {
  let component: ModalidadeCadastroComponent;
  let fixture: ComponentFixture<ModalidadeCadastroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadeCadastroComponent ],
      imports: [ HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadeCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
