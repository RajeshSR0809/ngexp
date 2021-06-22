import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamiccmpComponent } from './dynamiccmp/dynamiccmp.component';
import { DynamicSCAMComponent } from './dynamic-scam/dynamic-scam.component';
import { DynamicWithIOComponent } from './dynamic-with-io/dynamic-with-io.component';
import { LazyPatternsRoutingModule } from './lazyloading-routing.module';
import { ProductCardComponent } from './dynamiccmp/product-card/product-card.component';
import { MaterialModule } from '../material/material.module';
import { ProductInfoComponent } from './dynamic-with-io/product-info/product-info.component';
import { OrderInfoComponent } from './dynamic-with-io/order-info/order-info.component';
import { DynamicIoModule, DynamicIoDirective } from 'ng-dynamic-component';


@NgModule({
  declarations: [
    DynamiccmpComponent,
    DynamicSCAMComponent,
    DynamicWithIOComponent,
    ProductCardComponent,
    // ProductInfoComponent,
    // OrderInfoComponent,
  ],
  imports: [
    CommonModule,
    LazyPatternsRoutingModule,
    MaterialModule,
    DynamicIoModule
  ],
  entryComponents:[

  ]
})
export class LazyloadingModule {}
