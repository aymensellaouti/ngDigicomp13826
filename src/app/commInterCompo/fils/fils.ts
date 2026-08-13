import { Component, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-fils',
  imports: [],
  templateUrl: './fils.html',
  styleUrl: './fils.css',
})
export class Fils {
  // input permet d'exposer un paramètre au monde exterieur
  messageDePapa = input.required({
    alias: 'message',
  });

  sendMessageToPapa = output<string>();

  onSendMessageToPapa() {
    this.sendMessageToPapa.emit('ok mais je garde la monnaie')
  }
}
