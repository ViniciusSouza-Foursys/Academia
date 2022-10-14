import { ClienteService } from './../../../services/cliente.service';
import { Cliente } from './../../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/services/cep.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-cadastro',
  templateUrl: './cliente-cadastro.component.html',
  styleUrls: ['./cliente-cadastro.component.css', '../../shared/style.css']
})
export class ClienteCadastroComponent implements OnInit {

  cepErro : boolean = false

  formCliente : Cliente

  tiposPlano : any = ['Mensal', 'Trimestral', 'Semestral', 'Anual']

  constructor(
    private _clienteService : ClienteService,
    private _cepService : CepService,
    private _router : Router
  ) {
    this.formCliente = new Cliente()
   }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }
  }

  goCadastrar(){
    this._clienteService.postCliente(this.formCliente).subscribe()
    setTimeout(() => {
      window.location.reload()
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
