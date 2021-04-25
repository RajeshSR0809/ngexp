import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-outputs',
  templateUrl: './dir-outputs.component.html',
  styleUrls: ['./dir-outputs.component.scss']
})
export class DirOutputsComponent implements OnInit {

  valueFromDirective;
  constructor() { }

  ngOnInit(): void {
  }

  onextFtrs($event){
    this.valueFromDirective = $event;
  }
}
