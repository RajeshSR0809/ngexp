import { Component, OnInit } from '@angular/core';
import { of, fromEvent, timer, range, race, interval } from "rxjs";
import {
  map,
  switchMap,
  mergeMap,
  takeUntil,
  repeat,
  scan,
  filter,
  tap,
  take,
  first,
  delay,
  mapTo
} from "rxjs/operators";
@Component({
  selector: 'app-hold-to-delete',
  templateUrl: './hold-to-delete.component.html',
  styleUrls: ['./hold-to-delete.component.scss']
})
export class HoldToDeleteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const mouseDown$ = fromEvent(document.getElementById("del"), "mousedown");
    const mouseUp$ = fromEvent(document.getElementById("del"), "mouseup").pipe(
      mapTo("no")
    );
    const interval$ = interval(10).pipe();
    const intervalCount$ = interval$.pipe(
      scan((a, c) => {
        a = c + 1;
        return a;
      }, 0)
    );
    const intervalCountReached$ = intervalCount$.pipe(
      tap(_ => {
        document.getElementById("prog").style.width = `${_}%`;
        document.getElementById("per").innerHTML = _.toString();
      }),
      take(100),
      filter(val => val > 99),
      mapTo("yes")
    );
    mouseDown$
      .pipe(switchMap(_ => race(mouseUp$, intervalCountReached$)))
      .subscribe(console.log, console.error, () => {
        console.warn("done");
      });

  }

}
