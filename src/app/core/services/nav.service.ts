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
      // {
      //   name: "Cards",
      //   icon: "style",
      //   link: "/cards",
      //   parent: true,
      //   nav: true,
      //   children: [
      //     {
      //       name: "Cards",
      //       icon: "style",
      //       link: "/cards",
      //       child: true,
      //       nav: true,
      //     }
      //   ]
      // },
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
    ]);
  }
}
