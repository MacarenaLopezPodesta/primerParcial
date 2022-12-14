import { Pais } from './../../clases/pais';
import { PaisService } from 'src/app/services/pais.service';
import { ProductoService } from 'src/app/services/producto.service';
import { Producto } from './../../clases/producto';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta-producto',
  templateUrl: './alta-producto.component.html',
  styleUrls: ['./alta-producto.component.css']
})
export class AltaProductoComponent implements OnInit {

  @Output() altaProducto: EventEmitter<any>= new EventEmitter<any>();

  public unProducto: Producto;

  public flagPais: any;
  public test:any;
  token:any;
  unPaisSeleccionado : Pais;

  public constructor(private productoSVC: ProductoService, private router: Router) { this.unProducto = new Producto(); }

  cambiarPais(elPais: any) {
    console.log("Cambiando pais");
    console.log(elPais);
  this.unPaisSeleccionado = elPais;
  this.unProducto.paisOrigen = elPais.name;
  this.test = elPais.name;

  }

  ngOnInit(): void {


    this.token = localStorage.getItem('token');

    console.log(this.token)

    if(this.token == null)
    {
   

      location.assign('bienvenida');

    }
    
  }




  crearProducto() {


    this.productoSVC.Crear(this.unProducto).then(() => {

      console.log('se envio el producto');
      console.log(this.unProducto);
      location.assign('/listadoProductos');
      alert("producto creado");
    })

  
  }
}
