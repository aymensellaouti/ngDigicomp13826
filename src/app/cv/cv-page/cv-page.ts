import { Component, inject, signal } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvsList } from "../cvs-list/cvs-list";
import { CvCard } from "../cv-card/cv-card";
import { CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { LoggerService } from '../../services/logger';
import { SayHelloService } from '../../services/sayHello.service';
import { CvService } from '../services/cv-service';

@Component({
  selector: 'app-cv-page',
  imports: [CvsList, CvCard, DatePipe, UpperCasePipe, CurrencyPipe],
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
  cvs = this.cvService.getCvs();
  selectedCv = this.cvService.getSelectedCv();

  loggerService = inject(LoggerService);
  constructor(
    // L'ancienne mannière d'injecter ca a changé depuis ng14
    // public loggerService: LoggerService
  ) {
    this.loggerService.log('cc je suis le CvPageComponent');
    this.sayHelloService.hello();
  }
}
