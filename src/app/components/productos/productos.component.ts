import { Component, OnInit, NgZone } from '@angular/core';
import { producto } from '../../model/productos';
import { referencia } from '../../model/referencia';
import { color } from '../../model/color';
import { Observable} from 'rxjs/Observable';
import { ProductosService } from '../../services/productos.service';
import { ReferenciaService } from '../../services/referencia.service';
import { ColorService } from '../../services/color.service';
import { NgForm} from '@angular/forms';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  providers: [ ReferenciaService , ColorService ,ProductosService]
})
export class ProductosComponent  {
  productos: producto[] = [];
  refs: referencia[] = [];
  colors: color [] = [];
  imageToShow: any;
  
  constructor(private referenciaService: ReferenciaService, private colorservice: ColorService , private zone: NgZone ,private productosService:ProductosService){ 
     this.LoadReferencias();
     this.LoadColors();
     this.LoadProducts();
  }

  onChange(event) {
    console.log( event.target.files[0].name );
    console.log( event.target.files[0]);
    let reader = new FileReader();
       reader.addEventListener("load", () => {
          this.imageToShow = reader.result;
       }, false);

  }

  LoadReferencias() {
    this.referenciaService.getReferencias()
    .subscribe(referencias => {
      this.zone.run(() => {
        this.refs = referencias;
      });
    });
  }

  LoadColors() {
    this.colorservice.getColores()
    .subscribe(colores => {
      this.zone.run(() => {
        this.colors = colores;
      });
    });
  }
  LoadProducts() {
    this.productosService.getProductos()
    .subscribe(productos => {
      this.zone.run(() => {
        this.productos = productos;
        console.log(this.productos)
      });
    });
  }
}


