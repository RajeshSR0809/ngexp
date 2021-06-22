import { Component, OnInit, ViewContainerRef, AfterViewInit, OnDestroy, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-scam',
  templateUrl: './dynamic-scam.component.html',
  styleUrls: ['./dynamic-scam.component.scss']
})
export class DynamicSCAMComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  constructor(private factoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    of(1).pipe(
      tap(_ => this.loadComp())
    ).subscribe();
  }

  ngOnDestroy(){}

  loadComp = async () => {
    const prdCmp = await import('./product-card/product-card.component').then((c) => c.ProductCardComponent2);
    const prdCmpFactory = this.factoryResolver.resolveComponentFactory(prdCmp);
    const prdcmpInstance = this.container.createComponent(prdCmpFactory);
    prdcmpInstance.instance.info = {a: 2};
  }

}
