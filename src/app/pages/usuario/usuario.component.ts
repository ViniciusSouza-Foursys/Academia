import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css', '../shared/style.css']
})
export class UsuarioComponent implements OnInit {
  usuarios : any[] = []
  tempUserName : string = ''
  tempUserId : number = 0

  constructor(
    private _usuarioService : UsuarioService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }

    this.buscarUsers()
  }

  buscarUsers(){
    this._usuarioService.getAllUsers().subscribe(data =>{
      this.usuarios = data
    })
  }

  goDetail(id : number){
    this._router.navigate(['usuario', id])
  }

  goBuscar(id : number){
    this._usuarioService.getUser(id).subscribe(data =>{
      this.tempUserName = data.nome
      this.tempUserId = data.id
    })
  }

  goDelete(){
    this._usuarioService.deleteUser(this.tempUserId).subscribe()
    window.location.reload()
  }
}
