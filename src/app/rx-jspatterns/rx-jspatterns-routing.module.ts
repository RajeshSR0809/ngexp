import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirOutputsComponent } from './dir-outputs/dir-outputs.component';

const routes: Routes = [
    {
        path: 'resizeClm',
        component: DirOutputsComponent,
    },
    {
        path: '',
        redirectTo: 'resizeClm',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RXJSRoutingModule { }
