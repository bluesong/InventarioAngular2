import { Injectable } from '@angular/core';
import { HandleError } from "../services/http-error-handler.service";
import { HttpClient } from '@angular/common/http';
import { producto } from '../model/productos';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductosService {
  private handleError: HandleError

  constructor(private http:HttpClient) { }
  
  heroesUrl = 'http://localhost:3000/api/Prod';


  getProductos (): Observable<producto[]> {
    return this.http.get<producto[]>(this.heroesUrl)
  }

}
