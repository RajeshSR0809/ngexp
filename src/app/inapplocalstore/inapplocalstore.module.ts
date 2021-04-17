import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalstoreComponent } from './localstore/localstore.component';
import { LocalStoreRoutingModule } from './localstore.routing.module';
import { LocalstoreService } from './localstore.service';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [LocalstoreComponent],
  imports: [
    CommonModule,
    LocalStoreRoutingModule,
    MaterialModule
  ],
  providers: [LocalstoreService]
})
export class InapplocalstoreModule { }
