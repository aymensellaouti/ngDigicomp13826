import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sum',
  imports: [FormsModule],
  templateUrl: './sum.html',
  styleUrl: './sum.css',
})
export class Sum {
  x = signal(5);
  y = signal(7);
  // Affecter a z la valeur x + y

  // z ca s'abonner à tous les signaux qu'elle utilise
  // a chaque mise a jour d'un des signaux elle se recalcule
  z = computed(() => this.x() + this.y());
  doubleZ = computed(() => this.z() * 2)
}
