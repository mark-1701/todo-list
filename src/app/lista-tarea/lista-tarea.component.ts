import { Component, Inject } from '@angular/core';
import { AgregarTareaComponent } from '../agregar-tarea/agregar-tarea.component';
import { EliminarTareaComponent } from '../eliminar-tarea/eliminar-tarea.component';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-lista-tarea',
  standalone: true,
  imports: [AgregarTareaComponent, EliminarTareaComponent],
  templateUrl: './lista-tarea.component.html',
  styleUrl: './lista-tarea.component.css'
})
export class ListaTareaComponent {
  // Array
  listTask: string[] = [];

  // constructor
  constructor(@Inject(DOCUMENT) private document: Document) {
    const localStorage = document.defaultView?.localStorage;
    this.listTask = JSON.parse(localStorage?.getItem('taks') || '[]');
  }

  // contador
  counter: number = 1;

  // propiedad para cambiar el estado de la tarea
  completedTasks: boolean[] = Array(this.listTask.length).fill(false);

  // metodo para cambiar estado
  changeState(index: number) {
    this.completedTasks[index] = !this.completedTasks[index];
  }
}
