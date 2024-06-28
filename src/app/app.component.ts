import { Component } from '@angular/core';
import { ListaTareaComponent } from './lista-tarea/lista-tarea.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListaTareaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '7-TODOLIST';
}
