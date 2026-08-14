import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class Highlight {
  constructor() {
    console.log("apphighlight");
  }

  @HostBinding('style.backgroundColor') bgc = 'red';

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = 'yellow';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = 'red';
  }
}
