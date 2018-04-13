import { Component, OnInit, NgZone } from '@angular/core';
import { producto } from '../../model/productos';
import { producto_color } from '../../model/productos_color';
import { color } from '../../model/color';
import { Observable} from 'rxjs/Observable';
import { ProductosService } from '../../services/productos.service';
import { ReferenciaService } from '../../services/referencia.service';
import { ColorService } from '../../services/color.service';
import { NgForm ,FormGroup, FormControl , Validator, Validators} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  providers: [ ReferenciaService , ColorService , ProductosService]
})
export class ProductosComponent  {
  productos: producto[] = [];
  colors: color [] = [];
  imageToShow: any;
  base_img = 'data:image/jpeg;base64,';
  forma:FormGroup;
  producto_color:producto_color

  constructor(private referenciaService: ReferenciaService, private colorservice: ColorService ,
    private zone: NgZone , private productosService: ProductosService,
    public domSanitizer: DomSanitizer) {

     this.loadColors();
     this.loadProducts();
    
     this.forma = new FormGroup({
     'producto':  new  FormControl('' ,Validators.required),
     'color':  new  FormControl('' ,Validators.required),
     'imagen':  new  FormControl("" ,Validators.required)
     })
  }

  guardar(){
    this.producto_color = this.forma.value
    this.producto_color.imagen = this.imageToShow;
  }

  onChange(event) {
    const maxfile = 3145728;
    const fileList: FileList = event.target.files;
    if (fileList.length > 0 ) {
        const file: File = fileList[0];
        const size = file.size;
        if (size > maxfile) {
        }else {
          this.getBase64(file);
          
        }
    }

  }

  getBase64(file) {
    const context = this;
   const reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
    context.imageToShow = reader.result;
   };
   reader.onerror = function (error) {
  //  return null;
   };
  }

  loadColors() {
    this.colorservice.getColores()
    .subscribe(colores => {
      this.zone.run(() => {
        this.colors = colores;
      });
    });
  }
  loadProducts() {
    this.productosService.getProductos()
    .subscribe(productos => {
      this.zone.run(() => {
        this.productos = productos;
      });
    });
  }

}


