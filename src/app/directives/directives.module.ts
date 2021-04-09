import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyOptionsComponent } from './lazy-options/lazy-options.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { ContainerComponent } from './container/container.component';



@NgModule({
  declarations: [LazyOptionsComponent, ContainerComponent],
  imports: [
    CommonModule,
    DirectivesRoutingModule
  ]
})
export class DirectivesModule { }
