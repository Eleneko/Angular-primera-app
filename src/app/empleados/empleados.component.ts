import { Component } from "@angular/core";
// Decorador, construye: Selector - URL template - URL stylesheet
@Component({
    selector: "app-empleados",
    templateUrl: "./empleados.component.html",
    styleUrls: ["./empleados.component.css"]
})
// Creando la clase exportable del componente
export class EmpleadosComponent{

}

//Para registrar esta nueva aplicación debo ir a app.module.ts