import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, AfterViewInit, OnDestroy } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { of, empty } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Component({
  selector: 'app-dynamiccmp',
  templateUrl: './dynamiccmp.component.html',
  styleUrls: ['./dynamiccmp.component.scss']
})
export class DynamiccmpComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('container', {read: ViewContainerRef}) container: ViewContainerRef;
  constructor(private factoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(){
    of(1).pipe(delay(500), tap(_ => this.loadProductInfoCom())).subscribe()
  }

  loadProductInfoCom(){
    this.container.clear();
    const prdCmpFactory = this.factoryResolver.resolveComponentFactory(ProductCardComponent);
    const prdCmp = this.container.createComponent(prdCmpFactory);
    prdCmp.instance.info = {price: 999, name: 'Watch', modal: 'WAT-85924'};
  }

  ngOnDestroy(){
    this.container.clear();
  }

}
