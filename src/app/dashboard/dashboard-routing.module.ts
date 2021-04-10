import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
    { 
        path: '', 
        component: DashboardComponent,
        children: [
            {
                path: 'directives',
                loadChildren: () => import("../directives/directives.module").then(m => m.DirectivesModule)
            },
            {
                path: 'cards',
                loadChildren: () => import("../cards/cards.module").then(m => m.CardsModule)
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { 
    constructor(){}
}
