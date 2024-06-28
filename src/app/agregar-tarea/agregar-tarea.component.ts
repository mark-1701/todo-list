import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-agregar-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './agregar-tarea.component.html',
  styleUrl: './agregar-tarea.component.css'
})
export class AgregarTareaComponent {
  @Input() agregarTareasRecibidas: string[] = [];

  // ngModel
  newTask = '';

  saveTask() {
    if (this.newTask.trim() !== '') {
      if (!localStorage.getItem('taks')) {
        localStorage.setItem('taks', JSON.stringify([this.newTask]));
      } else {
        const taks = JSON.parse(localStorage.getItem('taks') || '[]');
        const newTasks = [...taks, this.newTask];
        localStorage.setItem('taks', JSON.stringify(newTasks));
      }
      window.location.reload();
    }
  }
}
