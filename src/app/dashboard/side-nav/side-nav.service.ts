import { Injectable } from '@angular/core';
import { BehaviorSubject, merge } from 'rxjs';
import { take, share, filter } from 'rxjs/operators';

@Injectable()
export class SideNavService {

  direct$ = new BehaviorSubject(null);
  nav$ = new BehaviorSubject(null);
  r$ = merge(this.direct$.pipe(filter(_ => !!_)), this.nav$.pipe(filter(_ => !!_))).pipe(
    take(1),
    share()
  )
  constructor() { }
}
