import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoreInfoCardComponent } from './more-info-card/more-info-card.component';
import { CardsRoutingModule } from './cards-routing.module';



@NgModule({
  declarations: [MoreInfoCardComponent],
  imports: [
    CommonModule,
    CardsRoutingModule
  ]
})
export class CardsModule { }
