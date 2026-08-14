import { Component } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-exemple-ngclass',
  imports: [NgClass],
  templateUrl: './exemple-ngclass.html',
  styleUrl: './exemple-ngclass.css',
})
export class ExempleNgclass {
  isOn = false;

  interrupteur() {
    this.isOn = !this.isOn
  }
}
