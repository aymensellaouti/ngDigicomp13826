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
  isHidden = false;
  constructor() {
    // setTimeout(() => {
    //   this.name.set("Thierry")
    // }, 2000);
  }
  // Comportement qui affiche ou cache selon l'état actuel
  showHide() {
    this.isHidden = !this.isHidden;
  }
}
