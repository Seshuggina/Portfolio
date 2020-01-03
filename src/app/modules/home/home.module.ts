import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesPricingComponent } from './services-pricing/services-pricing.component';
import { ResumeComponent } from './resume/resume.component';
import { BlogsComponent } from './blogs/blogs.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [HomeComponent, AboutComponent, PortfolioComponent, ServicesPricingComponent, ResumeComponent, BlogsComponent, ContactComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [HomeComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
