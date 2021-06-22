import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DynamiccmpComponent } from './dynamiccmp/dynamiccmp.component';
import { DynamicSCAMComponent } from './dynamic-scam/dynamic-scam.component';
import { DynamicWithIOComponent } from './dynamic-with-io/dynamic-with-io.component';

const routes: Routes = [
    {
        path: 'lazy',
        component: DynamiccmpComponent,
    },
    {
        path: 'dynamicscam',
        component: DynamicSCAMComponent,
    },
    {
        path: 'dynamicwithio',
        component: DynamicWithIOComponent,
    },
    {
        path: '',
        redirectTo: 'lazy',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LazyPatternsRoutingModule { }
