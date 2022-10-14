import { Cliente } from './../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/services/cliente.service';
import { CepService } from 'src/app/services/cep.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-detail',
  templateUrl: './cliente-detail.component.html',
  styleUrls: ['./cliente-detail.component.css', '../../shared/style.css']
})
export class ClienteDetailComponent implements OnInit {

  cepErro : boolean = false

  formCliente : Cliente

  tiposPlano : any = ['Mensal', 'Trimestral', 'Semestral', 'Anual']

  constructor(
    private _clienteService : ClienteService,
    private _cepService : CepService,
    private _route : ActivatedRoute,
    private _router : Router
  ) {
    this.formCliente = new Cliente()
   }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }

    this._clienteService.getCliente(Number(this._route.snapshot.paramMap.get('id'))).subscribe( data => {
      this.formCliente = data
    })
  }

  goEditar(){
    this._clienteService.putCliente(this.formCliente).subscribe()
    setTimeout(() => {
      this._router.navigate(['cliente'])
    },1000)
  }
  goBuscarEndereco(){
    if(this.formCliente.cep.length == 8){
      this._cepService.getEndereco(this.formCliente.cep).subscribe( data => {
        if(data.erro){
          this.cepErro = true
          setTimeout(() => {
            this.cepErro = false
          }, 2000)
        }
        else{
        this.formCliente.endereco = data.logradouro
        this.formCliente.bairro = data.bairro
        this.formCliente.cidade = data.localidade
        this.formCliente.estado = data.uf
        }
      })
    }
    else{
      this.cepErro = true
          setTimeout(() => {
            this.cepErro = false
          }, 2000)
    }
  }
}
