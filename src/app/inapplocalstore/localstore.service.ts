import { Injectable } from '@angular/core';
import { ApiService } from '../core/services/api.service';
import { Observable, timer } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalstoreService {

  private cache$: Observable<any[]>;
  constructor(private apiService: ApiService) { }

  get jokes(): Observable<any[]>{
    if(!this.cache$){
      let timer$ = timer(0, 1000)
      this.cache$ = timer$.pipe(
        switchMap(() => this.requestJokes()),
        shareReplay(1)
      )
    }
    return this.cache$;
  }

  private requestJokes(): Observable<any[]>{
    return this.apiService.get('https://api.icndb.com/jokes/random/5').pipe(
      map(data => data.value)
    )
  }
}
