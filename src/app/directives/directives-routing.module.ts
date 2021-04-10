import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyOptionsComponent } from './lazy-options/lazy-options.component';

const routes: Routes = [
 
    {
        path: "lazyoptions",
        component: LazyOptionsComponent
    },
    {
        path: "",
        redirectTo: "lazyoptions",
        pathMatch: "full"
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DirectivesRoutingModule { }
