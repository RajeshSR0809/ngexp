import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LocalstoreService } from '../localstore.service';
import { Observable, merge, Subject } from 'rxjs';
import { take, skip, mapTo, switchMap, tap, repeat, repeatWhen, delay } from 'rxjs/operators';

@Component({
  selector: 'app-localstore',
  templateUrl: './localstore.component.html',
  styleUrls: ['./localstore.component.scss']
})
export class LocalstoreComponent implements OnInit {

  updates$ = new Subject();
  forceUpdate$ = new Subject();
  initialJokes$: Observable<any[]> = this.getJokesOnce().pipe(repeatWhen(_ => this.reload$));

  updatesWithAnimation$ = this.updates$
  .pipe(
    tap(_ => {
        const notificationBar: HTMLElement = this.notificationbar.nativeElement;
        notificationBar.classList.toggle('hide-notification');
      }
    ), 
    delay(350)
  );
  initialNotification$: Observable<any> = this.getNotification();
  reload$: Observable<any> = this.forceUpdate$.pipe(switchMap(_ => this.getNotification()));
  show$ = merge(this.initialNotification$, this.reload$).pipe(mapTo('true'));
  hide$ = merge(this.updatesWithAnimation$, this.forceUpdate$).pipe(mapTo('false'));
  showNotification$ = merge(this.show$, this.hide$);

  updateJokes$: Observable<any[]> = merge(this.updates$, this.forceUpdate$).pipe(switchMap(_ => this.getJokesOnce()));
  jokes$: Observable<any[]> = merge(this.initialJokes$, this.updateJokes$);


  @ViewChild('notificationbar', {static: false}) notificationbar: ElementRef;
  constructor(private storeService: LocalstoreService) { }

  ngOnInit(): void {
  }

  getJokesOnce(): Observable<any>{
    return this.storeService.jokes.pipe(take(1));
  }

  forceUpdate(){
    this.storeService.forceUpdate();
    this.forceUpdate$.next('forceUpdate');
  }

  getNotification(): Observable<any>{
    return this.storeService.jokes.pipe(skip(1));  
  }
}
