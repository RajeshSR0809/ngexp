import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Observable, timer, Subject } from 'rxjs';
import { map, shareReplay, switchMap, takeUntil, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {

  private cache$: Observable<any[]>;
  private forcedFetch$ = new Subject();

  constructor(private apiService: ApiService) { }

  get jokes(): Observable<any[]>{
    if(!this.cache$){
      let timer$ = timer(0, 10000)
      this.cache$ = timer$.pipe(
        switchMap(() => this.requestJokes()),
        takeUntil(this.forcedFetch$),
        shareReplay(1)
      )
    }
    return this.cache$;
  }

  private requestJokes(): Observable<any[]>{
    return this.apiService.get('https://api.icndb.com/jokes/random/5').pipe(
      map(data => data.value),
      retry(5)
    )
  }

  forceUpdate(){
    this.forcedFetch$.next();
    this.cache$ = null;
    //return this.requestJokes();
  }
}
