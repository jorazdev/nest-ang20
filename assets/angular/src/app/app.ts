import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import bg from '@images/nest-ang20.png';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('NestJS & Angular20 Signal & TailwindCSS 4');
}
