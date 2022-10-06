import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { UsuariofireService } from 'src/app/services/usuariofire.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public unUsuario: Usuario;
  //public existe: Boolean;
  public loged: Boolean=false;
  public cargando: boolean=false;


  public aux:number=0;

  constructor(private servicioUsuario: UsuariofireService, private router: Router) { this.unUsuario = new Usuario(); this.loged = false; }

token:any
  ngOnInit(): void {


    this.token = localStorage.getItem('token');

    console.log(this.token)

    if(this.token == null)
    {
   
      this.aux = 0
     

    }
    else {  this.aux = 1;// location.assign('bienvenida');}
    
  }
}


salir(){

  localStorage.removeItem('token')
  location.assign('usuario/login');

}

  public LoginRapidoAdmin() {
    this.unUsuario.clave = '123456';
    this.unUsuario.correo = "admin@admin.com";

  }


  public LoginRapidoEmpleado() {
    this.unUsuario.clave = '123456';
    this.unUsuario.correo = "empleado@empleado.com";

  }



  public Login() {


    this.servicioUsuario.BuscarUsuario(this.unUsuario).valueChanges().subscribe(result => {
      if (result.length == 1) {

        localStorage.setItem('token', this.unUsuario.correo)

        this.cargando = true;
       this.router.navigateByUrl("altaProducto");
        console.log('existe')
        
      }
      else {
        //this.cargando = true;
        console.log("error")
      }

    })


  }

}
