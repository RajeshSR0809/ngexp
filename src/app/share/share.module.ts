import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from './components/nav-item/nav-item.component';
import { NavItemSearchComponent } from './components/nav-item-search/nav-item-search.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { NavItemExpandComponent } from './components/nav-item-expand/nav-item-expand.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [NavItemComponent, NavItemSearchComponent, NavItemExpandComponent],
  exports: [NavItemComponent, NavItemSearchComponent, NavItemExpandComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ]
})
export class ShareModule { }
