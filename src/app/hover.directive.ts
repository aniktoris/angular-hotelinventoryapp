import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  colorB: string = 'pink';
  color: string = 'darkblue';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.colorB;
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }

}
