import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  constructor() { }

  getNavItem(): Observable<any[]>{
    return of(
      [
        { 
          name: "Directives", 
          icon: "verified", 
          link: "/directives", 
          parent: true,
          children: [
            { 
              name: "Lazy Load Options", 
              icon: "published_with_changes", 
              link: "/directives/lazyoptions",
              nav: true,
            },
            {
              name: "Prevent Propagation",
              icon: "near_me_disabled",
              link: "/directives/preventpropagation",
              nav: true,
            }
          ]
        },
        { 
          name: "Cards", 
          icon: "verified", 
          link: "/cards",
          parent: true,
        },
        {
          name: "Advanced Patterns",
          icon: "pattern",
          link: "/patterns",
          parent: true,
          children: [
            {
              name: "Component",
              icon: "minimize",
              link: "/patterns/component",
              nav: true,
            },
            {
              name: "Compount Component",
              icon: "menu",
              link: "/patterns/comp",
              nav: true,
            },
            {
              name: "Compount Component DI",
              icon: "wrap_text",
              link: "/patterns/compDI",
              nav: true,
            }

          ] 
        }
      ]
    );
  }
}
