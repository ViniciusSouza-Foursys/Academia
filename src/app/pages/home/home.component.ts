import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../shared/style.css']
})
export class HomeComponent implements OnInit {

  clientes : any[] = []

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

}
