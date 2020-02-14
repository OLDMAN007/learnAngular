//配置路由的模塊

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Home4Component } from './component4/home4/home4.component';
import { News4Component } from './component4/news4/news4.component';
import { Product4Component } from './component4/product4/product4.component';
import { NewscontentComponent } from './component4/newscontent/newscontent.component';
import { ProductcontentComponent } from './component4/productcontent/productcontent.component';

import { Home5Component } from './component5/home5/home5.component';
import { Product5Component } from './component5/product5/product5.component';
import { WelcomeComponent } from './component5/home5/welcome/welcome.component';
import { SettingComponent } from './component5/home5/setting/setting.component';
import { ProCateComponent } from './component5/product5/pro-cate/pro-cate.component';
import { ProListComponent } from './component5/product5/pro-list/pro-list.component';

const routes: Routes = [
  //component4
  // {
  //   path: "home",
  //   component: HomeComponent
  // },{
  //   path: "news",
  //   component: NewsComponent
  // },{
  //   path: "news/newsContent/:aid",
  //   component: NewscontentComponent
  // },{
  //   path: "product",
  //   component: ProductComponent
  // },{
  //   path: "product/productContent",
  //   component: ProductcontentComponent
  // }

//component5
  {
    path: "home",
    component: Home5Component,
    children: [
      {
        path: "welcome",
        component: WelcomeComponent
      },{
        path: "setting",
        component: SettingComponent
      },{
        path: "**",
        redirectTo: "welcome"
      }
    ]
  },{
    path: "product",
    component: Product5Component,
    children: [
      {
        path: "proCate",
        component: ProCateComponent
      },{
        path: "proList",
        component: ProListComponent
      },{
        path: "**",
        redirectTo: "proCate"
      }
    ]
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
