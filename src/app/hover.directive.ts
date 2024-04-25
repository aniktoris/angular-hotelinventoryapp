import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit {

  //@Input() colorB: string = 'pink';
  @Input() appHover: string = 'pink';
  color: string = 'darkblue';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.appHover;
    this.renderer.setStyle(this.element.nativeElement, 'color', this.color);
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', "purple");
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', "white");
  }
}
