import { Component, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvsList } from "../cvs-list/cvs-list";
import { CvCard } from "../cv-card/cv-card";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-cv-page',
  imports: [CvsList, CvCard, DatePipe, UpperCasePipe, CurrencyPipe],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
})
export class CvPage {
  //State
  today = new Date();
  cvs = signal<Cv[]>([
    new Cv(1, 'Begin', 'Thierry', 'Ingénieur', '1234', 20, 'rotating_card_profile3.png'),
    new Cv(2, 'Khribech', 'Anass', 'Bibliothècaire', '1234', 20, 'rotating_card_profile.png'),
    new Cv(3, 'Sellaouti', 'Aymen', 'Formateur', '1234', 44, ''),
    new Cv(4, 'Sellaouti', 'Aymen', 'Formateur', '1234', 44, '                   '),
  ]);
  /**
   * @var le cv sélectionné
   */
  selectedCv = signal<Cv | null>(null)
}
