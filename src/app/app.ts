import { Component, signal } from '@angular/core';

@Component({
  // Comment j'appelle mon composant
  selector: 'app-root',
  // je définit ce dont j'ai besoin mes dépendances : composants, directives, pipe
  imports: [],
  // Le bout de code html géré par ce composant
  templateUrl: './app.html',
  // Le style css appliqué à ce composant
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngDigicomp13826');
}
