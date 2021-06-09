import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CQRSRoutingModule } from './cqrs-routing.module';
import { CqrsComponent } from './cqrs/cqrs.component';
import { ShareModule } from '../share';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [CqrsComponent],
  imports: [
    CommonModule,
    CQRSRoutingModule,
    ShareModule,
    MaterialModule
  ]
})
export class CqrsModule { }
