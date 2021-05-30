import { Directive, ElementRef ,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

//   constructor(el: ElementRef) {
//     el.nativeElement.style.backgroundColor = 'yellow';
//  }

 constructor(private el: ElementRef) { }
 
 @HostListener('mouseenter') onMouseEnter() {  this.el.nativeElement.style.backgroundColor ='yellow'; }
 @HostListener('mouseleave') onMouseLeave() {  this.el.nativeElement.style.backgroundColor ='cyan'; }

}
