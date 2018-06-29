import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShow]'
})
export class ShowDirective {
  constructor(private el: ElementRef) {}
  @HostListener('mouseenter') onMouseEnter() {
    this.show('yellow');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.show(null);
  }
  private show(color: string) {
    this.el.nativeElement.style.display = color;
  }


}
