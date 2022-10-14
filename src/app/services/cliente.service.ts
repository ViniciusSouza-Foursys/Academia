
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlApi : string = config.caminho+'clientes/'


  constructor(
    private _http : HttpClient,
  ) {}



  getCliente(id : number) : Observable<any> {
    return this._http.get(this.urlApi+id)
  }

  getAllClientes() : Observable<any> {
    return this._http.get(this.urlApi)
  }

  postCliente(cliente : any) : Observable<any> {
    return this._http.post(this.urlApi, cliente)
  }

  putCliente(cliente : any) : Observable<any> {
    return this._http.put(this.urlApi+cliente.id, cliente)
  }

  deleteCliente(id : number) : Observable<any> {
    return this._http.delete(this.urlApi+id)
  }
}
