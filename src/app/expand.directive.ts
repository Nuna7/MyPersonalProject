import { Directive ,HostListener,Renderer2,ElementRef} from '@angular/core';

@Directive({
  selector: '[appExpand]'
})
export class ExpandDirective {

  constructor(private element:ElementRef,
        private renderer:Renderer2) { }

  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.addClass(this.element.nativeElement,'expand')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.renderer.removeClass(this.element.nativeElement,'expand')
  }
}
