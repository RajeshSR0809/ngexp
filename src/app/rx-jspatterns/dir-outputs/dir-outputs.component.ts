import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir-outputs',
  templateUrl: './dir-outputs.component.html',
  styleUrls: ['./dir-outputs.component.scss']
})
export class DirOutputsComponent implements OnInit {

  readonly rows = [
    ["King Arthur", "-", "Arrested"],
    ["Sir Bedevere", "The Wise", "Arrested"],
    ["Sir Lancelot", "The Brave", "Arrested"],
    ["Sir Galahad", "The Chaste", "Killed"],
    ["Sir Robin", "The Not-Quite-So-Brave-As-Sir-Lancelot", "Killed"],
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onextFtrs($event){
  }
}
