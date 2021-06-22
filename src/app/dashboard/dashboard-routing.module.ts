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
        path: 'lazyloadingpatterns',
        loadChildren: () =>
          import('../lazyloading/lazyloading.module').then((m) => m.LazyloadingModule),
      },     
      {
        path: 'cqrs',
        loadChildren: () =>
          import('../cqrs/cqrs.module').then((m) => m.CqrsModule),
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
