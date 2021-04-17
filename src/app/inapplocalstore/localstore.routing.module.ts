import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocalstoreComponent } from './localstore/localstore.component';

const routes: Routes = [

    {
        path: "",
        component: LocalstoreComponent
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LocalStoreRoutingModule { }
