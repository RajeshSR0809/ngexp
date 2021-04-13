import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyOptionsComponent } from './lazy-options/lazy-options.component';
import { PreventPropagationComponent } from './prevent-propagation/prevent-propagation.component';
import { AddAttributesComponent } from './add-attributes/add-attributes.component';

const routes: Routes = [
 
    {
        path: "lazyoptions",
        component: LazyOptionsComponent
    },
    {
        path: "preventpropagation",
        component: PreventPropagationComponent
    },  
    {
        path: 'editattributes',
        component: AddAttributesComponent,
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
