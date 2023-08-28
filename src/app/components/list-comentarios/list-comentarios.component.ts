import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/interfaces/comentario';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {
  listComentarios: Comentario[] = [
    { titulo: 'Angular', creador: 'Fernando', texto: 'Framework para crear SPa', fechaCreacion: new Date() },
    { titulo: 'React', creador: 'Miguel', texto: 'Libreria para crear SPA', fechaCreacion: new Date() }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}


