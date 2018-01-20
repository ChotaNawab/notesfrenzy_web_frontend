import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FlashComponent} from './flash/flash.component';
import {HeaderComponent} from './header/header.component';
import {MainpageComponent} from './mainpage/mainpage.component';

const routes: Routes = [
  { path: 'flash', component: FlashComponent },

  { path: '', component: MainpageComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
