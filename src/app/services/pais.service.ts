import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PaisService {
  public paisActual;
  
  constructor(private http: HttpClient) {

    this.paisActual = "Argentina";

  }

  public obtenerPaisActual() {
    return this.paisActual;
  }

  public asignarPaisActual(pais: string) {

    this.paisActual = pais;

  }

   traerPaises() {
    /*try {
      const response: any = await fetch('https://restcountries.com/v3.1/all');
      const countries: any = await response.json();
      return countries;
    } catch (error) {
      console.error(error);
    }*/
    
    return this.http.get("https://restcountries.com/v3.1/all");
  

  }

  traerUnPais(pais: string) {


  }
}
