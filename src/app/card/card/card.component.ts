import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  /* public imagen: string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-eg8PQLROZGgiy0FP33LPJ-NbW7PfYfgFUA&s";
  public Titulo:string= "Curso de angular con Interpolacion"; */

  @Input() dataEntrante:any;

  constructor(){}

  ngOnInit():void{

  }
}
