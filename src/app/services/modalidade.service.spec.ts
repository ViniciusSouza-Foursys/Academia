import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ModalidadeService } from './modalidade.service';

describe('ModalidadeService', () => {
  let service: ModalidadeService;

  let httpStub = {
    get: (params : any) => of(
      [
        {
          "modalidade": "Musculação",
          "turno": "Matutino",
          "horario": "12:25",
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
    service = TestBed.inject(ModalidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
