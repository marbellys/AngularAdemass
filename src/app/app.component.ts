import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card/card.component';
import { CommonModule } from '@angular/common';
import { ComponentedosComponent } from './componentedos/componentedos.component';
import { ComponenteunoComponent } from './componenteuno/componenteuno.component';



interface Tarjeta{
  titulo:string;
  subtitulo:string;
  imagen:string; 
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,CardComponent,
    CommonModule,ComponenteunoComponent,ComponentedosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Mi Primer App Angular';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'video 1', subtitulo:'subtitulo video1',imagen:"https://images.pexels.com/photos/18129528/pexels-photo-18129528/free-photo-of-mujer-modelo-maqueta-joven.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"},
      {titulo:'video 2', subtitulo:'subtitulo video2',imagen:"https://images.pexels.com/photos/20888053/pexels-photo-20888053/free-photo-of-kleinhorn-rosenlaui-suiza.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {titulo:'video 3', subtitulo:'subtitulo video3',imagen:"https://images.pexels.com/photos/19057526/pexels-photo-19057526/free-photo-of-paisaje-naturaleza-campo-campos.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
      {titulo:'video 4', subtitulo:'subtitulo video4',imagen:"https://images.pexels.com/photos/16499257/pexels-photo-16499257/free-photo-of-noche-adolescente-nino-chico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
          ]   
  }
}
