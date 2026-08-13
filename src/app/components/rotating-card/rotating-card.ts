import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-rotating-card',
  imports: [FormsModule],
  templateUrl: './rotating-card.html',
  styleUrl: './rotating-card.css',
})
export class RotatingCard {
  // 1 On définit le state
  name = signal('Beguin');
  firstname = 'Thierry';
  job = 'ingénieur';
  path = 'rotating_card_profile3.png';
}
