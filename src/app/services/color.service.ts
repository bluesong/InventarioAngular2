import { Injectable } from '@angular/core';
import { HandleError } from "../services/http-error-handler.service";
import { color } from "../model/color";
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ColorService {
  private handleError: HandleError

  constructor(private http:HttpClient) { }
  
  heroesUrl = 'http://localhost:3000/api/color';


  getColores (): Observable<color[]> {
    return this.http.get<color[]>(this.heroesUrl)
  }

}
