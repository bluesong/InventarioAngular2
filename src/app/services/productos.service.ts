import { Injectable } from '@angular/core';
import { HandleError } from "../services/http-error-handler.service";

@Injectable()
export class ProductosService {
  heroesUrl = 'api/heroes';  // URL to web api
  private handleError: HandleError;

  constructor() { }

}
