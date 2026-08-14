import { Component } from '@angular/core';
import { NgStyle } from "@angular/common";
import { Highlight } from "../../directives/highlight";
import { Rainbow } from "../../directives/rainbow";

@Component({
  selector: 'app-color',
  // On supprime l'import et on passe a style a partir d'angular 19
  imports: [NgStyle, Highlight, Rainbow],
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
  font = 'verdana';
  bgc = 'gold';
  size = 50;
  changeColor(newColorInput: HTMLInputElement) {
    this.color = newColorInput.value;
    newColorInput.value = '';
  }
  reset() {
    this.color = this.defaultColor;
  }
}
