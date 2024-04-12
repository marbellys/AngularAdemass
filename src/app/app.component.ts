import { Component,OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card/card.component';
import { CommonModule } from '@angular/common';

interface Tarjeta{
  titulo:string;
  subtitulo:string;
  nro?:number; //declara la propiedad de tipo nulla, si se necesita
               // se coloca pero ino , no da error
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,CardComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Mi Primer App Angular';
  public ArregloTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'video 1', subtitulo:'subtitulo video1',nro:1},
      {titulo:'video 2', subtitulo:'subtitulo video2',nro:2},
      {titulo:'video 3', subtitulo:'subtitulo video3'},
      {titulo:'video 4', subtitulo:'subtitulo video4'},
          ]   
  }
}
