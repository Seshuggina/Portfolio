import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/common'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    //HttpModule,
    CoreModule,
    AppRoutingModule,
    HomeModule
  ],
  exports:[HomeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
