//配置路由的模塊

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home4Component } from './component4/home4/home4.component';
import { News4Component } from './component4/news4/news4.component';
import { Product4Component } from './component4/product4/product4.component';

const routes: Routes = [
  {
    path: "home",
    component: Home4Component
  },{
    path: "news",
    component: News4Component
  },{
    path: "product",
    component: Product4Component
  },{
    path: "**", //默認路由，匹配不到path時加載的路由
    redirectTo: "home"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
