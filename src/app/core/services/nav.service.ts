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
        { name: "Directives", icon: "verified", link: "/directives", children: [{ name: "Lazy Load Options", icon: "published_with_changes", link: "/directives/lazyoptions"}]}
      ]
    );
  }
}
