import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuario= 'Mari';
  password = '12345';

  resultado = false;
  mensaje = '';


  ValidarUsuario(user:string, pass:string){
    if(user == this.usuario && pass == this.password){
      this.resultado = true;
      this.mensaje="Bienvenido";
    }else{
      this.resultado = false;
      this.mensaje="Usuario u Clave es incorrecto, intentalo nuevamente.";
    }
  }

}


