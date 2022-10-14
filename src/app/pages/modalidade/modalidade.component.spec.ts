import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalidadeComponent } from './modalidade.component';

describe('ModalidadeComponent', () => {
  let component: ModalidadeComponent;
  let fixture: ComponentFixture<ModalidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalidadeComponent ],
      imports: [ HttpClientTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
