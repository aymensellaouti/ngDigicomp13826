import { Component, signal } from '@angular/core';
import { Second } from "../second/second";

@Component({
  selector: 'app-first',
  imports: [Second],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {
  name = "aymen";
  /**
   * Permet de gérer l'affichage ou non d'une balise
   * en la bindant à l'attribut hidden
   * @var
   */
  isHidden = false;

  color = 'green';

  message = '';
  constructor() {
    // setTimeout(() => {
    //   this.name.set("Thierry")
    // }, 2000);
  }
  // Comportement qui affiche ou cache selon l'état actuel
  showHide() {
    this.isHidden = !this.isHidden;
  }

  changeMessage(newMessage: string) {
    this.message = newMessage;
  }
}
