import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario : string = ''
  senha : string = ''

  falhaLogin : string = ''

  constructor(
    private _usuarioService : UsuarioService,
    private _router : Router
  ) { }

  ngOnInit() : void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }
  }

  goLogin(){
    if(this.usuario === '' || this.senha === ''){
      this.falhaLogin = 'Preencher campos para entrar'
      setTimeout(() =>{
        this.falhaLogin = ''
      }, 2000)
    }
    else{
      this.logar()
    }
  }

  logar(){
    this._usuarioService.getAllUsers().subscribe(data => {
      data.forEach((element : any) => {
        if(this.usuario === element.email && this.senha === element.senha){
          window.localStorage.setItem("user", element.email)
          window.localStorage.setItem("acesso", element.acesso)
          this._router.navigate(["home"])
        }

      })
      this.falhaLogin = 'Usuário não encontrado'
      setTimeout(() =>{
        this.falhaLogin = ''
      }, 2000)
    })

  }
}
