import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPreventPropagation]',
})
export class PreventPropagationDirective {
  constructor() {}

  @HostListener('click', ['$event'])
  clickHandler(event) {
    debugger;
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  }
}
