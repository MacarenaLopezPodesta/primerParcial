import { Producto } from './../clases/producto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  /*rutaDeLaColeccion = '/productos';
  referenciaAlaColeccion: AngularFirestoreCollection<Producto>;
  referenciaBd: AngularFirestore;*/
  productos:Observable<any[]>;

  constructor(private angularFirestore: AngularFirestore) {
    /*this.referenciaBd = bd;
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);

    this.productos = this.referenciaAlaColeccion.valueChanges(this.rutaDeLaColeccion)*/


  }

  getAll(){
    return this.productos;
  }

  Crear(producto: Producto): any {

    const us = {
      //id: usuario.id,
      codigo: producto.codigo,
    descripcion:producto.descripcion,
    precio:producto.precio,
    stock:producto.stock,
    paisOrigen:producto.paisOrigen,
    comestible:producto.comestible
    };

    return this.angularFirestore.collection<any>('productos').add(us);
    //return this.referenciaAlaColeccion.add({ ...producto });

 

  }

  public TraerTodos() {
    //return this.referenciaAlaColeccion;
    const collection = this.angularFirestore.collection<any>('productos');
    return collection.valueChanges();
  }


  /*public Buscarproducto(producto: Producto) {
    return this.referenciaBd.collection(this.rutaDeLaColeccion, ref => ref.where("nombre", "==", producto.codigo).where("apellido", "==", producto.descripcion).where("edad", "==", producto.precio).where("sexo", "==", producto.stock).where("nacionalidad", "==", producto.paisOrigen).where("nacionalidad", "==", producto.comestible));
  }*/

}
