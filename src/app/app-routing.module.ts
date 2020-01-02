import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/modules/home/home.component'
import { HomeModule } from './modules/home/home.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'public',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
