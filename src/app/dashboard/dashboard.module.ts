import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material/material.module';
import { ShareModule } from '../share';
import { NavService } from '../core/services/nav.service';
import { Router, ActivatedRoute } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [DashboardComponent, SideNavComponent, TodoComponent],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule, ShareModule],
})
export class DashboardModule {
  constructor(private router: Router, private activateRoute: ActivatedRoute){

  }
}
