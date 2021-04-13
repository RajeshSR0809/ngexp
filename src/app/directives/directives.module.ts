import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyOptionsComponent } from './lazy-options/lazy-options.component';
import { DirectivesRoutingModule } from './directives-routing.module';
import { PreventPropagationComponent } from './prevent-propagation/prevent-propagation.component';
import { MaterialModule } from '../material/material.module';
import { LazyOptionsDirective } from './lazy-options.directive';



@NgModule({
  declarations: [LazyOptionsComponent, PreventPropagationComponent, LazyOptionsDirective],
  imports: [
    CommonModule,
    DirectivesRoutingModule,
    MaterialModule
  ]
})
export class DirectivesModule { }
