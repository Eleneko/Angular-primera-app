import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //
  //HTML INLINE
  // template:"<p>Aqui va un empleado</p>",
  //
  styleUrls: ['./empleado.component.css']
  //Se puede omitir la direccion del css para hacerlo directamente (inline) en el caso de una app sencilla
  //usar styles? en vez de styleUrls?
  //CSS INLINE
  // styles:['p{background-color:pink;}']
  //
  //
})
export class EmpleadoComponent{

  nombre = "Elena";
  apellido ="Marquez";
  private edadIngreso =21;
  edad = 32;

  empresa="Google";
  // cambiarEmpresa(event:Event){
  //   this.empresa=(<HTMLInputElement>event.target).value;
  // }

  textoRegistro = "No hay nadie registrado";
  registro = false;
  habilitarCaja = false;

  //metodo para acceder a la propiedad privada
  getEdadIngreso(){
    return this.edadIngreso;
  }

  getRegistroUsuario(){
    this.registro=false;
  }

  setUsuarioRegistrado(event:Event){
    // alert("Hipoteticamente te has registrado");
    // this.textoRegistro="El usuario se acaba de registrar";
    if((<HTMLInputElement>event.target).value =="si"){
      this.textoRegistro="El usuario se acaba de registrar";
    }else{
      this.textoRegistro="No hay usuario registrado";
    }
  }

  ingresoEmpresa(value:String){
  }

}
