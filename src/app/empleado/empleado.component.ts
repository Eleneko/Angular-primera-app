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
  // empresa="Empresa gatuna";
  //metodo para acceder a la propiedad privada
  getEdadIngreso(){
    return this.edadIngreso;
  }

  habilitarCaja = true;

  ingresoEmpresa(value:String){

  }

}
