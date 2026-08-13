import { Component } from '@angular/core';

@Component({
  selector: 'app-color',
  imports: [],
  templateUrl: './color.html',
  styleUrl: './color.css',
})
export class Color {
  // State : attributs dynamique de la vue
  defaultColor = 'red';
  /**
   * @var représente la couleur du background
   */
  color = this.defaultColor;
  changeColor(newColorInput: HTMLInputElement) {
    this.color = newColorInput.value;
    newColorInput.value = '';
  }
  reset() {
    this.color = this.defaultColor;
  }
}
