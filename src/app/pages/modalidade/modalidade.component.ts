import { ModalidadeService } from './../../services/modalidade.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modalidade',
  templateUrl: './modalidade.component.html',
  styleUrls: ['./modalidade.component.css', '../shared/style.css']
})
export class ModalidadeComponent implements OnInit {
  modalidades : any[] = []
  tempModalidadeName : string = ''
  tempModalidadeId : number = 0

  constructor(
    private _modalidadeService : ModalidadeService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }

    this.buscarModalidades()
  }

  buscarModalidades(){
    this._modalidadeService.getAllModalidades().subscribe(data =>{
      this.modalidades = data
    })
  }

  goDetail(id : number){
    this._router.navigate(['modalidade', id])
  }

  goBuscar(id : number){
    this._modalidadeService.getModalidade(id).subscribe(data =>{
      this.tempModalidadeName = data.modalidade
      this.tempModalidadeId = data.id
    })
  }

  goDelete(){
    this._modalidadeService.deleteModalidade(this.tempModalidadeId).subscribe()
    window.location.reload()
  }
}
