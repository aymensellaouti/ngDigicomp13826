import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvsList } from "../cvs-list/cvs-list";
import { CvCard } from "../cv-card/cv-card";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { LoggerService } from '../../services/logger';
import { SayHelloService } from '../../services/sayHello.service';
import { CvService } from '../services/cv-service';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheComponent } from "../embauche/embauche.component";

@Component({
  selector: 'app-cv-page',
  imports: [CvsList, CvCard, DatePipe, UpperCasePipe, CurrencyPipe, EmbaucheComponent],
  templateUrl: './cv-page.html',
  styleUrl: './cv-page.css',
})
export class CvPage {
  //State
  today = new Date();
  // Ca c'est mal, faut pas le faire
  // loggerService = new LoggerService();
  sayHelloService = inject(SayHelloService);
  cvService = inject(CvService);
  toastr = inject(ToastrService);
  cvs = signal<Cv[]>([]);
  selectedCv = this.cvService.getSelectedCv();

  loggerService = inject(LoggerService);
  constructor(
    // L'ancienne mannière d'injecter ca a changé depuis ng14
    // public loggerService: LoggerService
  ) {
    this.loggerService.log('cc je suis le CvPageComponent');
    this.sayHelloService.hello();
    this.toastr.info("Bien venu dans notre CvTech :)");
    this.cvService.getCvsFromApi().subscribe({
      next: (cvs) => {
        this.cvs.set(cvs);
      },
      error: (e) => {
        const fakeCvsSignal = this.cvService.getCvs();
        const fakeCvs = fakeCvsSignal();
        this.cvs.set(fakeCvs);
        this.toastr.error("Veuillez contacter l'admin il y a un pbm les données sont fictives")
      }
    })
  }
}
