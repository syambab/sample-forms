import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor(private ele:ElementRef) { }
  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) { 
    const initalValue = this.ele.nativeElement.value;
    this.ele.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
    if (initalValue !== this.ele.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
