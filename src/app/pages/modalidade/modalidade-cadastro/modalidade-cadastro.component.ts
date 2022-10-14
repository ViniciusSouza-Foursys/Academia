import { ModalidadeService } from './../../../services/modalidade.service';
import { Component, OnInit } from '@angular/core';
import { Modalidade } from 'src/app/models/modalidade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalidade-cadastro',
  templateUrl: './modalidade-cadastro.component.html',
  styleUrls: ['./modalidade-cadastro.component.css', '../../shared/style.css']
})
export class ModalidadeCadastroComponent implements OnInit {

  formModalidade : Modalidade

  turnos : any = ['Matutino', 'Vespertino', 'Noturno']

  constructor(
    private _modalidadeServie : ModalidadeService,
    private _router : Router
  ) {
    this.formModalidade = new Modalidade()
   }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }
  }

  goCadastrar(){
    this._modalidadeServie.postModalidade(this.formModalidade).subscribe()
    setTimeout(() => {
      window.location.reload()
    },1000)

  }
}
