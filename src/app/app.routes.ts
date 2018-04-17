import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {OcultaComponent} from './components/oculta/oculta.component';
import {PreciosComponent} from './components/precios/precios.component';
import {ProductosComponent} from './components/productos/productos.component';
import { ParametrosComponent } from './components/parametros/parametros.component';
import {VentasComponent} from './components/ventas/ventas.component';

const app_routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'oculta', component: OcultaComponent},
  { path: 'precios', component: PreciosComponent},
  { path: 'productos', component: ProductosComponent},
  { path: 'ventas', component: VentasComponent},
  { path: 'parametros', component: ParametrosComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
