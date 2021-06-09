import { Component, OnInit } from '@angular/core';
import { CqrsService } from '../cqrs.service';
import { merge, timer, NEVER, Observable } from 'rxjs';
import { switchMap, tap, startWith, shareReplay, scan, pluck, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-cqrs',
  templateUrl: './cqrs.component.html',
  styleUrls: ['./cqrs.component.scss']
})
export class CqrsComponent implements OnInit {

  counterState = {
    count: 0,
    isTicking: false,
    tickSpeed: 200,
    countUp: true,
    countDiff: 1
  }
  constructor(public cqrsService: CqrsService) { }

  ngOnInit(): void {

    const counterCommands$ = merge(this.cqrsService.startCommand$, this.cqrsService.pauseCommand$, this.cqrsService.programmatic$).pipe()

    const counterState$: Observable<any> = counterCommands$
      .pipe(
        startWith(this.counterState),
        scan((state, command) => {
          return {...state, ...command}
        }),
        shareReplay(1)
      );    

    const isTicking$ = counterState$.pipe(pluck('isTicking'));

    isTicking$.pipe(
      tap(console.log),
      switchMap((isTicking) => isTicking ? timer(0,200): NEVER),
      tap((value) => this.cqrsService.programmaticEvent({count: value}))
    ).subscribe()
  }

}
