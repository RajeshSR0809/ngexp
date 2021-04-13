import { Directive, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { throttleTime, pluck, map, pairwise, filter, switchMap, tap } from 'rxjs/operators';
import * as _ from 'lodash';

@Directive({
  selector: '[appLazyOptions]',
})
export class LazyOptionsDirective {

  itemSize = 20;
  data: any[];
  totalCount: number = 0
  lastRenderedData: any[] = [];
  @Output() lazyData = new EventEmitter();
  @Input('data')
  set setData(data: any[]){
    this.data = [...data];
    this.totalCount = data.length;
    this.totalCount = this.totalCount-this.itemSize;
    this.lastRenderedData = data.slice(0, this.itemSize);
    this.lazyData.emit([...this.lastRenderedData]);
    console.log('directive got new data to process   ', data.length, '');
  }
  constructor(private elemRef: ElementRef) {

    //listen to the scroll event
    //get target object
    //get scroll position from target object
    //have a pair of such scroll position values, to check scroll is moving up or down
    //check scrolled for downwards
    //get current scroll position from pair of positions
    //check for scroll position is btw range of 0 to 10, 
        //this is prevent the halt of scrolling even when data is available to render
        //to load the option well before scroll position reaches bottom
    //switch to totalcount of objects to be rendered
    //map to totalcount by removing itemSize from the count     
    //as a side effect, assign this value to totalcount state
    //emit only if all items are not rendered
        //all items are rendered or not is managed in  the totalcount state
        //totalcount will be decremented by itemsize for every successful event
    fromEvent(this.elemRef.nativeElement, "scroll")
      .pipe(
        throttleTime(1),
        pluck("target"),
        map((data) => {
          const target = data as Element;
          return target.scrollHeight - target.scrollTop - target.clientHeight;
        }),
        pairwise(),
        filter(([p, c]) => p > c),
        map(([p, c]) => c),
        filter((count) => _.inRange(count, 0, 30)),
        switchMap((_) => of(this.totalCount)),
        map((count) => {
          if (count > 0 && count < this.itemSize) {
            return 0;
          } else {
            return count - this.itemSize;
          }
        }),
        tap((count) => (this.totalCount = count)),
        filter((count) => count >= 0),
      )
      .subscribe((count) => {
        
        const startIndex = this.lastRenderedData.length;
        console.log('start of the array', startIndex );
        const dataToEmit = [
          ...this.data.slice(startIndex, startIndex + this.itemSize),
        ];

        this.lastRenderedData = [...this.lastRenderedData, ...dataToEmit]
            
          
        console.log('length of data rendered   ', this.lastRenderedData.length)
        this.lazyData.emit(dataToEmit);

      });
    }
}
