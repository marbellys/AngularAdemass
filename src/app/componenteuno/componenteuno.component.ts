import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-componenteuno',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './componenteuno.component.html',
  styleUrl: './componenteuno.component.css'
})
export class ComponenteunoComponent {
  nombre='Marbellys';
  textPlaceHolder = "Escriba su nombre aqui...";

  desabilitado = false;
  imagen="https://images.pexels.com/photos/20830464/pexels-photo-20830464/free-photo-of-madera-amanecer-paisaje-agua.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load";


  mensaje =' esta es una prueba de event binding'

  texto :string ='';

  constructor(){
    
    //pasado 3s, la variable nombre toma el valor de Francesca
    setInterval(()=>this.nombre=' Francesca',3000);

    setInterval(()=>this.desabilitado = true,3000); 
  }

  getSuma(a:number, b:number){
    return a+b;
  }

  cambiarTexto():void{
    this.mensaje="mensaje cambiado";
  }




}
