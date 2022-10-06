import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class UsuariofireService {

  //rutaDeLaColeccion = '/usuarios';
 /// referenciaAlaColeccion: AngularFirestoreCollection<Usuario>;
  //referenciaBd: AngularFirestore;

  

  constructor(private angularFirestore: AngularFirestore) {
    /*this.referenciaBd = bd;
    this.referenciaAlaColeccion = bd.collection(this.rutaDeLaColeccion);*/

  }


  Crear(usuario: Usuario): any {
    const us = {
      //id: usuario.id,
      correo: usuario.correo,
      clave:usuario.clave
    };

    return this.angularFirestore.collection<any>('usuario').add(us);
   // return this.referenciaAlaColeccion.add({ ...usuario });

  }

  public TraerTodos() {
    const collection = this.angularFirestore.collection<any>('actores');
    return collection.valueChanges();
    //return this.referenciaAlaColeccion;
  }


  public BuscarUsuario(user: Usuario) {
    return this.angularFirestore.collection<any>('usuario', ref => ref.where("correo", "==", user.correo).where("clave", "==", user.clave));
    ///return this.referenciaBd.collection(this.rutaDeLaColeccion, ref => ref.where("correo", "==", user.correo).where("clave", "==", user.clave));

   

  }
}
