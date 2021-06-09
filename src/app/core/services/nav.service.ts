import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  getNavItem(): Observable<any[]>{
    return of([
      {
        name: 'Directives',
        icon: 'verified',
        link: '/directives',
        parent: true,
        children: [
          {
            name: 'Lazy Load Options',
            icon: 'published_with_changes',
            link: '/directives/lazyoptions',
            child: true,
          },
          {
            name: 'Prevent Propagation',
            icon: 'near_me_disabled',
            link: '/directives/preventpropagation',
            child: true,
          },
          {
            name: 'Add Attributes',
            icon: 'edit_attributes',
            link: '/directives/editattributes',
            child: true,
          },
        ],
      },
      {
        name: 'Cards',
        icon: 'style',
        link: '/cards',
        parent: true,
        nav: true,
      },
      {
        name: 'Caching with RxJs',
        icon: 'cached',
        link: '/cache',
        parent: true,
        nav: true,
      },
      {
        name: "RxJs Patterns",
        icon: "add_reaction",
        link: "/rxjspatterns",
        parent: true,
        nav: true,
        children: [
          {
            name: "Resizable Table Columns",
            icon: "view_week",
            link: "/rxjspatterns/resizeClm",
            child: true,
            nav: true,
          },
          {
            name: "Hold To Delete",
            icon: "auto_delete",
            link: "/rxjspatterns/holdtodelete",
            child: true,
            nav: true,
          }          
        ]
      },
      {
        name: 'Advanced Patterns',
        icon: 'pattern',
        link: '/patterns',
        parent: true,
        children: [
          {
            name: 'Component',
            icon: 'minimize',
            link: '/patterns/component',
            child: true,
          },
          {
            name: 'Compount Component',
            icon: 'menu',
            link: '/patterns/comp',
            child: true,
          },
          {
            name: 'Compount Component DI',
            icon: 'wrap_text',
            link: '/patterns/compDI',
            parent: true,
            children: [
              {
                name: 'Compount Component',
                icon: 'menu',
                link: '/patterns/comp',
                child: true,
              },
            ],
          },
        ],
      }, 
      {
        name: 'CQRS',
        icon: 'touch_app',
        link: '/cqrs',
        parent: true,
        nav: true,
      },

      {
        name: 'To Do',
        icon: 'category',
        link: '/todo',
        parent: true,
        nav: true,
      }
    ]);
  }
}
