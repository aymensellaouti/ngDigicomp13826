import { Component, EventEmitter, Input, input, Output, output } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv-item',
  imports: [],
  templateUrl: './cv-item.html',
  styleUrl: './cv-item.css',
})
export class CvItem {
  // L'ancienne manière de faire
  @Input({
    required: true,
  })
  cv2!: Cv;
  //State qui représente la partie dynamique de la vue
  // bgc = 'white';
  cv = input.required<Cv>();

  selectedCv = output<Cv>();
  // L'ancienne manière de faire
  @Output()
  selectedCv2 = new EventEmitter();

  onSelectedCv() {
    this.selectedCv.emit(this.cv());
    // this.selectedCv2.emit(cv2);
  }
  // highlight() {
  //   this.bgc == 'white' ? this.bgc = 'gold' : this.bgc = 'white';
  // }
}
