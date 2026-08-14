import { Component, signal } from '@angular/core';
import { First } from "./components/first/first";
import { Second } from "./components/second/second";
import { Color } from "./components/color/color";
import { Two } from './components/two/two';
import { RotatingCard } from "./components/rotating-card/rotating-card";
import { Counter } from "./signal/counter/counter";
import { Sum } from "./signal/sum/sum";
import { TtcComponent } from "./signal/ttc/ttc.component";
import { Pere } from "./commInterCompo/pere/pere";
import { CvPage } from "./cv/cv-page/cv-page";
import { MiniWordComponent } from "./directives/mini-word/mini-word.component";

@Component({
  // Comment j'appelle mon composant
  selector: 'app-root',
  // je définit ce dont j'ai besoin mes dépendances : composants, directives, pipe
  imports: [Two, RotatingCard, Counter, Color, Sum, TtcComponent, Pere, CvPage, MiniWordComponent],
  // Le bout de code html géré par ce composant
  templateUrl: './app.html',
  // Le style css appliqué à ce composant
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ngDigicomp13826');
}
