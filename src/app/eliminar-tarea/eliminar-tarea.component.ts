import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eliminar-tarea',
  standalone: true,
  imports: [],
  templateUrl: './eliminar-tarea.component.html',
  styleUrl: './eliminar-tarea.component.css'
})
export class EliminarTareaComponent {
  @Input() listTask: string[] = [];
  @Input() index: number = -1;

  // metodo para eliminar tarea
  deleteTask(index: number) {
    this.listTask.splice(index, 1);
    localStorage.setItem('taks', JSON.stringify(this.listTask));
    window.location.reload();
  }
}
