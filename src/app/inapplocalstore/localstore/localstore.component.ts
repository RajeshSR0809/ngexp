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

  jokes$: Observable<any[]>;
  initialJokes$: Observable<any[]> = this.getJokesOnce();
  

  updates$ = new Subject();
  initialNotification$: Observable<any> = this.storeService.jokes.pipe(skip(1))
  show$ = this.initialNotification$.pipe(mapTo('true'));
  hide$ = this.updates$.pipe(mapTo('false'));
  showNotification$ = merge(this.show$, this.hide$);
  
  updateJokes$: Observable<any[]> = this.updates$.pipe(switchMap(_ => this.getJokesOnce()));
  


  constructor(private storeService: LocalstoreService) { }

  ngOnInit(): void {
    this.jokes$ = merge(this.initialJokes$, this.updateJokes$)

    
  }

  getJokesOnce(): Observable<any>{
    return this.storeService.jokes.pipe(take(1))
  }
}
