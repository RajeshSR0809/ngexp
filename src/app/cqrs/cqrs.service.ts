import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mapTo, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CqrsService {

  constructor() { }

  private start = new BehaviorSubject(null);
  startCommand$ = this.start.asObservable().pipe(filter(value => value != null), mapTo({ isTicking: true }));

  private pause = new BehaviorSubject(null);
  pauseCommand$ = this.pause.asObservable().pipe(filter(value => value != null), mapTo({ isTicking: false }));

  private programmatic = new BehaviorSubject(null);
  programmatic$ = this.programmatic.asObservable().pipe(filter(value => value != null));

  changeStart(value: any){
    this.start.next(value);
  }

  changePause(value: any) {
    this.pause.next(value);
  }  

  programmaticEvent(value: any) {
    this.programmatic.next(value);
  }  

}
