import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirOutputsComponent } from './dir-outputs/dir-outputs.component';
import { RXJSRoutingModule } from './rx-jspatterns-routing.module';
import { ExtFtrsComponent } from './ext-ftrs/ext-ftrs.component';
import { ExtFtrsDirective } from './ext-ftrs.directive';
import { HoldToDeleteComponent } from './hold-to-delete/hold-to-delete.component';
import { ShareModule } from '../share';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [DirOutputsComponent, ExtFtrsComponent, ExtFtrsDirective, HoldToDeleteComponent],
  imports: [
    CommonModule,
    RXJSRoutingModule,
    ShareModule,
    MaterialModule
  ],
  exports: [ExtFtrsDirective]
})
export class RxJSPatternsModule { }
