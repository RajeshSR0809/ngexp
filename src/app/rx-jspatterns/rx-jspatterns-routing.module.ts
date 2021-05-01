import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DirOutputsComponent } from './dir-outputs/dir-outputs.component';
import { HoldToDeleteComponent } from './hold-to-delete/hold-to-delete.component';

const routes: Routes = [
    {
        path: 'resizeClm',
        component: DirOutputsComponent,
    },
    {
        path: 'holdtodelete',
        component: HoldToDeleteComponent
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
