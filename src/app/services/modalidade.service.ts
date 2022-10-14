import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from '../config/config';

@Injectable({
  providedIn: 'root'
})
export class ModalidadeService {

  urlApi : string = config.caminho+'modalidades/'


  constructor(
    private _http : HttpClient,
  ) { }

  getModalidade(id : number) : Observable<any> {
    return this._http.get(this.urlApi+id)
  }

  getAllModalidades() : Observable<any> {
    return this._http.get(this.urlApi)
  }

  postModalidade(mod : any) : Observable<any> {
    return this._http.post(this.urlApi, mod)
  }

  putModalidade(mod : any) : Observable<any> {
    return this._http.put(this.urlApi+mod.id, mod)
  }

  deleteModalidade(id : number) : Observable<any> {
    return this._http.delete(this.urlApi+id)
  }
}
