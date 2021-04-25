import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'directives',
        loadChildren: () =>
          import('../directives/directives.module').then(
            (m) => m.DirectivesModule
          ),
      },
      {
        path: 'cards',
        loadChildren: () =>
          import('../cards/cards.module').then((m) => m.CardsModule),
      },
      {
        path: 'cache',
        loadChildren: () =>
          import('../inapplocalstore/inapplocalstore.module').then((m) => m.InapplocalstoreModule),
      },
      {
        path: 'rxjspatterns',
        loadChildren: () =>
          import('../rx-jspatterns/rx-jspatterns.module').then((m) => m.RxJSPatternsModule),
      },      
      {
        path: 'todo',
        component: TodoComponent
      }
    ],
  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { 
    constructor(){}
}
