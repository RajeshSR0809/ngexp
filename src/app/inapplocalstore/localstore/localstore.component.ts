import { Component, OnInit } from '@angular/core';
import { LocalstoreService } from '../localstore.service';
import { Observable, merge, Subject } from 'rxjs';
import { take, skip, mapTo, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-localstore',
  templateUrl: './localstore.component.html',
  styleUrls: ['./localstore.component.scss']
})
export class LocalstoreComponent implements OnInit {

  
  
  

  
  updates$ = new Subject();
  forceUpdate$ = new Subject();
  initialJokes$: Observable<any[]> = this.getJokesOnce();
  updateJokes$: Observable<any[]> = merge(this.updates$.pipe(switchMap(_ => this.getJokesOnce())));
  jokes$: Observable<any[]> = merge(this.initialJokes$, this.updateJokes$)

  initialNotification$: Observable<any> = this.storeService.jokes.pipe(skip(1))
  show$ = merge(this.initialNotification$).pipe(mapTo('true'));
  hide$ = merge(this.updates$, this.forceUpdate$).pipe(mapTo('false'));
  showNotification$ = merge(this.show$, this.hide$);
  
  constructor(private storeService: LocalstoreService) { }

  ngOnInit(): void {
  }

  getJokesOnce(): Observable<any>{
    return this.storeService.jokes.pipe(take(1))
  }

  forceUpdate(){
    //this.storeService.forceUpdate();
    this.forceUpdate$.next();
  }
}
