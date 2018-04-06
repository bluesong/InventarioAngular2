import { Injectable } from '@angular/core';
import { HandleError } from "../services/http-error-handler.service";
import { referencia } from "../model/referencia";
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ReferenciaService {
  private handleError: HandleError

  constructor(private http:HttpClient) { }
  
  heroesUrl = 'http://localhost:3000/api/ref';


  getReferencias (): Observable<referencia[]> {
    return this.http.get<referencia[]>(this.heroesUrl)
  }

}
