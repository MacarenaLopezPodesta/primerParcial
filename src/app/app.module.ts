import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidaComponent } from './pages/bienvenida/bienvenida.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { environment } from 'src/environments/environment.prod';
import { AngularFireModule } from '@angular/fire/compat';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AltaProductoComponent } from './pages/alta-producto/alta-producto.component';
import { ListadoPaisesComponent } from './pages/listado-paises/listado-paises.component';
import { ListadoProductoComponent } from './pages/listado-producto/listado-producto.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';
import { ProductoDetalleComponent } from './pages/producto-detalle/producto-detalle.component';
import { ProductoListadoComponent } from './pages/producto-listado/producto-listado.component';
import { PaisPorductoComponent } from './pages/pais-porducto/pais-porducto.component';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidaComponent,
    LoginComponent,
    AltaProductoComponent,
    ListadoPaisesComponent,
    ListadoProductoComponent,
    DetalleProductoComponent,
    ProductoDetalleComponent,
    ProductoListadoComponent,
    PaisPorductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
