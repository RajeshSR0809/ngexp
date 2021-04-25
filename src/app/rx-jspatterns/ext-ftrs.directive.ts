import { Directive, OnInit, Inject, ElementRef, Output } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap, map } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[extFtrsTEST]',
  host: {
    class: 'extFtrstestclass'
  }
})
export class ExtFtrsDirective implements OnInit {

  @Output()
  readonly extFtrs = of(Math.random() * 100).pipe(delay(200), tap((_) => console.log(_)), map(_ => this.elementRef.nativeElement.id));

  constructor(
    @Inject(DOCUMENT) private readonly documentRef: Document,
    @Inject(ElementRef)
    private readonly elementRef: ElementRef<HTMLElement>
  ) { 
  }


  ngOnInit(){
    console.log('dir instance');
  }




}
