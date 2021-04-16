import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CachingComponent } from './caching/caching.component';
import { CachingService } from './caching.service';


const routes: Routes = [
  {
    path: '',
    component: CachingComponent,
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  providers: [ CachingService ],
})
export class CachingModule {}
