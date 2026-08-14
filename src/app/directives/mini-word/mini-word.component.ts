import { NgStyle } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css'],
  imports: [FormsModule, NgStyle]
})
export class MiniWordComponent {
  // Le state les attributs qui représente ce qui est dynamique dans la page
  size = signal(75);
  fontFamily = signal('garamond');
  color = signal('black')

}
