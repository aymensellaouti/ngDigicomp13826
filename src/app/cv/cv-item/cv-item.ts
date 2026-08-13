import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv-item',
  imports: [],
  templateUrl: './cv-item.html',
  styleUrl: './cv-item.css',
})
export class CvItem {
  cv = input.required<Cv>();

  selectedCv = output<Cv>();

  onSelectedCv() {
    this.selectedCv.emit(this.cv());
  }
}
