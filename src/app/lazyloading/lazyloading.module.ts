import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamiccmpComponent } from './dynamiccmp/dynamiccmp.component';
import { DynamicSCAMComponent } from './dynamic-scam/dynamic-scam.component';
import { DynamicWithIOComponent } from './dynamic-with-io/dynamic-with-io.component';
import { LazyPatternsRoutingModule } from './lazyloading-routing.module';



@NgModule({
  declarations: [DynamiccmpComponent, DynamicSCAMComponent, DynamicWithIOComponent],
  imports: [
    CommonModule,
    LazyPatternsRoutingModule
  ]
})
export class LazyloadingModule { }
