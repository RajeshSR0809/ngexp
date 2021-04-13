import { Injectable } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { ApiService } from './api.service';
import { pluck, map } from 'rxjs/operators';
import { INSTITUTION } from '../models/institution';

@Injectable({
  providedIn: 'root'
})
export class DirectivesService {

  constructor(private apiService: ApiService) { }

  getInsts(): Observable<any>{
    return forkJoin(
      this.apiService
        .get('/transcriptInstitutuions.json')
        .pipe(pluck('GetTEASTranscriptInstitutionsResult', 'Institutions')),

      this.apiService
        .get('/transcriptInstitutuions.json')
        .pipe(pluck('GetTEASTranscriptInstitutionsResult', 'Institutions')),

      this.apiService
        .get('/transcriptInstitutuions.json')
        .pipe(pluck('GetTEASTranscriptInstitutionsResult', 'Institutions'))
    ).pipe(
      map(([a,b,c]) => {
        return [...a,...b,...c].map((i: INSTITUTION, index) => ({ ...i,InstitutionID: index}));
      })
    );
  }
}
