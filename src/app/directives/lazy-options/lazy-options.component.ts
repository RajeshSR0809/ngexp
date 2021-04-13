import { Component, OnInit } from '@angular/core';
import { DirectivesService } from 'src/app/core/services/directives.service';
import { Observable, of } from 'rxjs';
import { INSTITUTION } from 'src/app/core/models/institution';
import { map, tap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-lazy-options',
  templateUrl: './lazy-options.component.html',
  styleUrls: ['./lazy-options.component.scss'],
})
export class LazyOptionsComponent implements OnInit {
  insts: INSTITUTION[];
  instsWithDir: INSTITUTION[];
  instsClone: INSTITUTION[] = [];
  constructor(private directivesService: DirectivesService) {}

  ngOnInit(): void {
    this.directivesService
      .getInsts()
      .pipe(
        tap((data) => (this.instsClone = data)),
        tap((data) => (this.insts = data)),
        tap((data) => (this.instsWithDir = []))
      )
      .subscribe();
  }

  trackByInst(index: number, inst: INSTITUTION) {
    return inst.InstitutionID;
  }

  lazyDataHandler(insts) {
    of(1).pipe(delay(10),tap(data => this.instsWithDir.push(...insts))).subscribe()
    
  }
}
