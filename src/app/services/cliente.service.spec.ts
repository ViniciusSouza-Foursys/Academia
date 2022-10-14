import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ClienteService } from './cliente.service';

describe('ClienteService', () => {
  let service: ClienteService;

  let httpStub = {
    get: (params : any) => of(
      [
        {
          "nome": "Teste",
          "tipoPlano": "Semestral",
          "telefone": "454545",
          "email": "sdwas",
          "cep": "81670250",
          "endereco": "Rua Doutor Danilo Gomes",
          "bairro": "Boqueirão",
          "cidade": "Curitiba",
          "estado": "PR",
          "id": 1
        }
      ]
    )
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpStub
        }
      ]
    });
    service = TestBed.inject(ClienteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
