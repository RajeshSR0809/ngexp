import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CqrsComponent } from './cqrs/cqrs.component';

const routes: Routes = [
    {
        path: '',
        component: CqrsComponent,
    },
    {
        path: '',
        redirectTo: 'preventpropagation',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CQRSRoutingModule { }
