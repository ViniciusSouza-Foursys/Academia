import { CepService } from './../../../services/cep.service';
import { UsuarioService } from './../../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css', '../../shared/style.css']
})
export class UsuarioCadastroComponent implements OnInit {

  cepErro : boolean = false

  formUsuario : Usuario

  userAcesso : any = ['Total', 'Restrito']
  userFuncao : any = ['Usuario', 'Instrutor']

  constructor(
    private _usuarioService : UsuarioService,
    private _cepService : CepService,
    private _router : Router
  ) {
    this.formUsuario = new Usuario()
   }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }
  }

  goCadastrar(){
    this._usuarioService.postUser(this.formUsuario).subscribe()
    setTimeout(() => {
      window.location.reload()
    },1000)
  }
  goBuscarEndereco(){
    if(this.formUsuario.cep.length == 8){
      this._cepService.getEndereco(this.formUsuario.cep).subscribe( data => {
        if(data.erro){
          this.cepErro = true
          setTimeout(() => {
            this.cepErro = false
          }, 2000)
        }
        else{
        this.formUsuario.endereco = data.logradouro
        this.formUsuario.bairro = data.bairro
        this.formUsuario.cidade = data.localidade
        this.formUsuario.estado = data.uf
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
