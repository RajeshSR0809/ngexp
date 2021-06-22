import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from './core/services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { DynamicIoModule } from 'ng-dynamic-component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    ShareModule,
    BrowserAnimationsModule,
    DynamicIoModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
