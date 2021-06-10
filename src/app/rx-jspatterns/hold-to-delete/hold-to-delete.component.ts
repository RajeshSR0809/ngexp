import { Component, OnInit, ViewChild, ElementRef, QueryList, ViewChildren } from '@angular/core';
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
import { MatCard } from '@angular/material/card';
@Component({
  selector: 'app-hold-to-delete',
  templateUrl: './hold-to-delete.component.html',
  styleUrls: ['./hold-to-delete.component.scss']
})
export class HoldToDeleteComponent implements OnInit {


  purchaseInfo = [1, 2, 3, 4];
  @ViewChildren("prgBar") prgBars: QueryList<ElementRef>;
  constructor() { }

  ngOnInit(): void {


  }


  mouseDown($event: MouseEvent, purchaseInfo: number, index:number){
    const btnElm: HTMLElement = $event.currentTarget as HTMLElement;
    const mouseUp$ = fromEvent($event.target, "mouseup").pipe(mapTo("no"));

    const prgBar: ElementRef = this.prgBars.toArray()[index];
    const matCard: HTMLElement = btnElm.closest('mat-card');
    const interval$ = interval(10).pipe();
    const intervalCount$ = interval$.pipe(
      scan((a, c) => {
        a = c + 1;
        return a;
      }, 0)
    );

    const intervalCountReached$ = intervalCount$.pipe(
      tap(_ => {
        prgBar.nativeElement.style.width = `${_}%`;
        btnElm.style.background = `linear-gradient(90deg, #ff5722 ${_}%, #FFFFFF ${_}%)`;
        //matCard.style.background = `linear-gradient(90deg, #ff5722 ${_}%, #FFFFFF ${_}%)`;
        
      }),
      take(100),
      filter(val => val > 99),
      mapTo("yes")
    );


    of(1)
      .pipe(
        switchMap(_ => race(mouseUp$, intervalCountReached$)), 
        take(1),
        delay(10),
        filter(state => state == 'yes'),
        switchMap(_ => of('delete the item ', purchaseInfo)),
        tap(resp => {
          prgBar.nativeElement.style.width = `0%`;
          this.purchaseInfo = this.purchaseInfo.filter(pur => pur != purchaseInfo);
        })
        )
        
      .subscribe(console.log, console.error, () => {
        console.warn("done");
        prgBar.nativeElement.style.width = `0%`;
        btnElm.style.background = `none`;
        //matCard.style.background = 'none';
      });


  }

}
