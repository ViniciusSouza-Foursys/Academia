import { ClienteService } from './../../services/cliente.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css', '../shared/style.css']
})
export class ClienteComponent implements OnInit {
  clientes : any[] = []
  tempClienteName : string = ''
  tempClienteId : number = 0

  constructor(
    private _clienteService : ClienteService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    if(!window.localStorage.getItem('user')){
      this._router.navigate(['login'])
    }

    this.buscarClientes()
  }

  buscarClientes(){
    this._clienteService.getAllClientes().subscribe(data =>{
      this.clientes = data
    })
  }

  goDetail(id : number){
    this._router.navigate(['cliente', id])
  }

  goBuscar(id : number){
    this._clienteService.getCliente(id).subscribe(data =>{
      this.tempClienteName = data.nome
      this.tempClienteId = data.id
    })
  }

  goDelete(){
    this._clienteService.deleteCliente(this.tempClienteId).subscribe()
    window.location.reload()
  }
}
