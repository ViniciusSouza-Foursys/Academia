import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { CepService } from 'src/app/services/cep.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-detail',
  templateUrl: './usuario-detail.component.html',
  styleUrls: ['./usuario-detail.component.css',  '../../shared/style.css']
})
export class UsuarioDetailComponent implements OnInit {

  cepErro : boolean = false

  formUsuario : Usuario

  userAcesso : any = ['Total', 'Restrito']
  userFuncao : any = ['Usuario', 'Instrutor']

  constructor(
    private _usuarioService : UsuarioService,
    private _cepService : CepService,
    private _route : ActivatedRoute,
    private _router : Router
  ) {
    this.formUsuario = new Usuario()
   }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }

    this._usuarioService.getUser(Number(this._route.snapshot.paramMap.get('id'))).subscribe( data => {
      this.formUsuario = data
    })
  }

  goEditar(){
    this._usuarioService.putUser(this.formUsuario).subscribe()
    setTimeout(() => {
      this._router.navigate(['usuario'])
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
