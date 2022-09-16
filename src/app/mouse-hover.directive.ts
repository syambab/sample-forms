import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseHover]'
})
export class MouseHoverDirective {

  constructor(private ele:ElementRef) { }
  @HostListener('mouseover') onmouseover(){ 
    this.ele.nativeElement.style.background='white';
    this.ele.nativeElement.style.button='Pointer';
    this.ele.nativeElement.style.color='black'
    this.ele.nativeElement.style.type='text';

  }
  @HostListener('mouseleave') onmouseleave(){
    this.ele.nativeElement.style.background='black';
    this.ele.nativeElement.style.color='white'

  }
  @HostListener('click') onbuttonclick(){
    this.ele.nativeElement.style.color='black'
    this.ele.nativeElement.style.background='white';

  }
  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) {
    const initalValue = this.ele.nativeElement.value;
    this.ele.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if (initalValue !== this.ele.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
