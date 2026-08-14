import { Injectable } from '@angular/core';

@Injectable({
  // Ajoute ca au menu, donc quand le dev te demande un LoggerService
  // Tu lui fournit une instance de cette classe
  providedIn: 'root',
})
export class LoggerService {

  log(message: unknown) {
    console.log("From Logger Service");
    console.log({message});
  }
}
