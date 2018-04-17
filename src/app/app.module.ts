import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgForm ,ReactiveFormsModule} from '@angular/forms';
//rutas
import {app_routing} from './app.routes';
//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { PreciosComponent } from './components/precios/precios.component';
import { OcultaComponent } from './components/oculta/oculta.component';
import { ProductosComponent } from './components/productos/productos.component';
import { VentasComponent } from './components/ventas/ventas.component';
//sevicios
import {AuthService} from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ParametrosComponent } from './components/parametros/parametros.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    PreciosComponent,
    OcultaComponent,
    ProductosComponent,
    VentasComponent,
    ParametrosComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
