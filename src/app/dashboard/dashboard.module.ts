import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material/material.module';
import { ShareModule } from '../share';
import { NavService } from '../core/services/nav.service';
import { Router, ActivatedRoute } from '@angular/router';



@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, MaterialModule, ShareModule],
})
export class DashboardModule {
  constructor(private router: Router, private activateRoute: ActivatedRoute){

  }
}
