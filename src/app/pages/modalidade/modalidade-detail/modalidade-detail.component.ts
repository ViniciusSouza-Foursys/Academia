import { ModalidadeService } from './../../../services/modalidade.service';
import { Modalidade } from 'src/app/models/modalidade';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modalidade-detail',
  templateUrl: './modalidade-detail.component.html',
  styleUrls: ['./modalidade-detail.component.css', '../../shared/style.css']
})
export class ModalidadeDetailComponent implements OnInit {

  formModalidade : Modalidade

  turnos : any = ['Matutino', 'Vespertino', 'Noturno']

  constructor(
    private _modalidadeService : ModalidadeService,
    private _route : ActivatedRoute,
    private _router : Router
  ) {
    this.formModalidade = new Modalidade()
   }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }

    this._modalidadeService.getModalidade(Number(this._route.snapshot.paramMap.get('id'))).subscribe( data => {
      this.formModalidade = data
    })
  }

  goEditar(){
    this._modalidadeService.putModalidade(this.formModalidade).subscribe()
    setTimeout(() => {
      this._router.navigate(['modalidade'])
    },1000)
  }

}
