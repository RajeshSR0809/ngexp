import { Component, OnInit } from '@angular/core';
import { DirectivesService } from 'src/app/core/services/directives.service';
import { Observable } from 'rxjs';
import { INSTITUTION } from 'src/app/core/models/institution';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lazy-options',
  templateUrl: './lazy-options.component.html',
  styleUrls: ['./lazy-options.component.scss']
})
export class LazyOptionsComponent implements OnInit {

  insts$: Observable<INSTITUTION[]>
  constructor(private directivesService: DirectivesService) { }

  ngOnInit(): void {
    this.insts$ = this.directivesService.getInsts();
  }

  trackByInst(index: number, inst: INSTITUTION) {
    return inst.InstitutionID;
  }
}
