import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
