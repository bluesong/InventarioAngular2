import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from "../model/globals";
import { talla } from "../model/talla";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TallaService {

  constructor(private http:HttpClient , private global:Globals) { }

  url = this.global.url_base +"talla";


  getTallas (): Observable<talla[]> {
    return this.http.get<talla[]>(this.url)
  }
}
