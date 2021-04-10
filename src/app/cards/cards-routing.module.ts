import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoreInfoCardComponent } from './more-info-card/more-info-card.component';

const routes: Routes = [

    {
        path: "",
        component: MoreInfoCardComponent
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
export class CardsRoutingModule { }
