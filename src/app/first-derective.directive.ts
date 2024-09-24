import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFirstDerective]',
  standalone: true,
})
export class FirstDerectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#e0e0e0');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
  }
}
