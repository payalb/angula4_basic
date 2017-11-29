import { Directive, ElementRef , HostListener} from '@angular/core';

@Directive({
  selector: '[bluecolored]'
})
export class BluecoloredDirective {

  constructor(private element: ElementRef) { 
    console.log(element.nativeElement.style.color = "blue");
  }

@HostListener('mouseenter') onmouseenter() {
  this.element.nativeElement.style.color = "red";
}

@HostListener('mouseleave') onmouseleave() {
  this.element.nativeElement.style.color = "black";
}
}
