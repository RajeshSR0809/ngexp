import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-attributes',
  templateUrl: './add-attributes.component.html',
  styleUrls: ['./add-attributes.component.scss'],
})
export class AddAttributesComponent implements OnInit {
  attrObj = { disabled : false};
  constructor() {}

  ngOnInit(): void {}

  toggleDisableAttr() {
    this.attrObj = this.attrObj['disabled']
      ? { disabled: false }
      : { disabled: true };
  }
}
