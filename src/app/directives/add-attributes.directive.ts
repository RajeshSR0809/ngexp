import { Directive, Input, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAddAttributes]',
})
export class AddAttributesDirective {
  @Input('attr')
  set attr(attr: { [key: string]: any } | null) {
      const keys: string[] = Object.keys(attr);
      const attrObj = keys.map((key: string) => {
        let a;
        if (typeof attr[key] === 'function') {
          a = { key: key, value: attr[key]() };
        }
        a = { key: key, value: attr[key] };
        this._setAttr(key, a.value)
      });
    }    
  

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  private _setAttr(name: string, value: any): void {
    if (value) {
      this.renderer.setAttribute(
        this.element.nativeElement,
        name,
        value as string
      );
    } else {
      this.renderer.removeAttribute(this.element.nativeElement, name);
    }
  }
}
