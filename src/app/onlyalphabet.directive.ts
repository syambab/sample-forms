import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyalphabet]'
})
export class OnlyalphabetDirective {

  constructor(private ele:ElementRef) { }
  
  @HostListener('input', ['$event']) onInputChange(event: { stopPropagation: () => void; }) { 
    const initalValue = this.ele.nativeElement.value;
    this.ele.nativeElement.value = initalValue.replace(/[^a-z A-Z.]*/g, '');
    if (initalValue !== this.ele.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
