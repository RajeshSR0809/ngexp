import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamiccmpComponent } from './dynamiccmp/dynamiccmp.component';
import { DynamicSCAMComponent } from './dynamic-scam/dynamic-scam.component';
import { DynamicWithIOComponent } from './dynamic-with-io/dynamic-with-io.component';
import { LazyPatternsRoutingModule } from './lazyloading-routing.module';
import { ProductCardComponent } from './dynamiccmp/product-card/product-card.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [DynamiccmpComponent, DynamicSCAMComponent, DynamicWithIOComponent, ProductCardComponent],
  imports: [
    CommonModule,
    LazyPatternsRoutingModule,
    MaterialModule
  ]
})
export class LazyloadingModule { }
