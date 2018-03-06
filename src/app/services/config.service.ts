import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {

  constructor(private http:HttpClient , private configService:ConfigService , private headers:HttpHeaders) { }

  configUrl = 'assets/config.json';

 

  getConfig() {
    // now returns an Observable of Config
    return this.http.get<Config>(this.configUrl);
  }

  config: Config;

  showConfig() {
    this.configService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe(data => this.config = { ...data });
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
  }

}

export interface Config {
  heroesUrl: string;
  textfile: string;
}