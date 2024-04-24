import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-componentedos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './componentedos.component.html',
  styleUrl: './componentedos.component.css'
})
export class ComponentedosComponent {
  listadoEstudiantes:any []=[
    {nro:10,nombre:'rosa',estado:'sucre'},
    {nro:11,nombre:'petra',estado:'nueva esparta'},
    {nro:12,nombre:'ines',estado:'merida'},
];

mostrar:boolean=true;
mostrarNoMostrar(){
  this.mostrar=!this.mostrar;

}



}
