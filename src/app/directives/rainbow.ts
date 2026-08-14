import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'input[appRainbow][type=text]',
})
export class Rainbow {
  @HostBinding('style.color')
  @HostBinding('style.borderColor')
  color = 'black';
  constructor() {
    console.log('appRainbow');
  }

  getRandomColor() {
    return '#' +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0');
  }

  @HostListener('keyup') onKeyUp() {
    this.color = this.getRandomColor();
  }
}
