import { Injectable, Output } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExtraFeaturesService extends Observable<any>{

  @Output()
  readonly  extFtrs = of(100).pipe(delay(600))
  constructor() { 
    super();
  }
}
