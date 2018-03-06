import { Component, OnInit, NgZone } from '@angular/core';
import { producto } from "../../model/productos";
import { referencia } from "../../model/referencia";
import {Observable} from 'rxjs/Observable';
import { ProductosService } from "../../services/productos.service";
import { ReferenciaService } from "../../services/referencia.service";


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'] ,
  providers: [ ReferenciaService]
})
export class ProductosComponent  {
  Productos:producto[] = [];
  refs: referencia[] = [];
  
  constructor(private referenciaService:ReferenciaService, private zone:NgZone) { 
     this.LoadReferencias();
  }

  LoadReferencias(){
    this.referenciaService.getReferencias()
    .subscribe(referencias => {
      this.zone.run(()=>{
        this.refs = referencias;
      });
    });
  }
}


