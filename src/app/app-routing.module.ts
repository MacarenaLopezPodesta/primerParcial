import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { LoginComponent } from './pages/login/login.component';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
const routes: Routes = [
  { path: 'bienvenida', component:  BienvenidaComponent},
  { path: 'altaProducto', component:  AltaProductoComponent},
  { path: 'listadoProductos', component:  ProductoDetalleComponent},
  {
    path: 'usuario',
  
    children:
      [
        { path: 'login', component: LoginComponent }
  
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
