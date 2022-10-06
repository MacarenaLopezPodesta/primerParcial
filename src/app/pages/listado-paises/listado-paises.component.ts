
import { PaisService } from 'src/app/services/pais.service';

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';
@Component({
  selector: 'app-listado-paises',
  templateUrl: './listado-paises.component.html',
  styleUrls: ['./listado-paises.component.css']
})
export class ListadoPaisesComponent implements OnInit {

  public miPais: string = "";  

  public listaPaises: any[] = [];

  @Output() paisSeleccionadoEvent: EventEmitter<any> = new EventEmitter<any>();  

  constructor(private paisesService: PaisService) {

    this.paisesService.traerPaises().subscribe(
      (data: any) => {
        this.listaPaises = data;
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {

    this.miPais = this.paisesService.obtenerPaisActual();

    this.paisesService.traerPaises().subscribe(result => {

    })



  }

  seleccionarPais(pais:any) {
    console.log(pais);
  
    this.paisSeleccionadoEvent.emit(pais);
  }


}
