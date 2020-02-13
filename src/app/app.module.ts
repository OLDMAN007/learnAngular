/**這個文件是angular根模塊，告訴angular如何組裝應用 */

//BrowserModule 瀏覽器解析的模塊
import { BrowserModule } from '@angular/platform-browser';
//angular核心模塊
import { NgModule } from '@angular/core';
//路由配置模塊
import { AppRoutingModule } from './app-routing.module';
//根組件
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

//component1
import { NewsComponent } from './component1/news/news.component';
import { HomeComponent } from './component1/home/home.component';
import { FormComponent } from './component1/form/form.component';
import { SearchComponent } from './component1/search/search.component';
import { TodolistComponent } from './component1/todolist/todolist.component'
import { DomAndViewChildComponent } from './component1/dom-and-view-child/dom-and-view-child.component';
import { HeaderComponent } from './component1/header/header.component';
import { TransitionComponent } from './component1/transition/transition.component'

//引入服務
import { StorageService } from './service1/storage.service';
import { Request2Service } from './service2/request2.service';

//component2
import { News2Component } from './component2/news2/news2.component';
import { Header2Component } from './component2/header2/header2.component';
import { Footer2Component } from './component2/footer2/footer2.component';
import { Home2Component } from './component2/home2/home2.component';

//component3
import { Home3Component } from './component3/home3/home3.component';
import { New3Component } from './component3/new3/new3.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';

//component4
import { Home4Component } from './component4/home4/home4.component';
import { News4Component } from './component4/news4/news4.component';
import { Product4Component } from './component4/product4/product4.component';
import { NewscontentComponent } from './component4/newscontent/newscontent.component';
import { ProductcontentComponent } from './component4/productcontent/productcontent.component';

/**@Ngmodule裝飾器 接收一個願數據對象，告訴angular如何編譯和啟動應用 */
@NgModule({
  /**配置當前項目運行的組件 */
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent,
    DomAndViewChildComponent,
    HeaderComponent,
    TransitionComponent,
    News2Component,
    Header2Component,
    Footer2Component,
    Home2Component,
    Home3Component,
    New3Component,
    Home4Component,
    News4Component,
    Product4Component,
    NewscontentComponent,
    ProductcontentComponent
  ],
  /**配置當前模塊運行依賴的其他模塊 */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule 
  ],
  /**配置項目所需要的服務 */
  providers: [
    StorageService,
    Request2Service
  ],
  /**執行應用的主視圖（稱為根組件）通過引導根AppModule來啟動應用，這裡一般寫的是根組件 */
  bootstrap: [AppComponent]
})

//根模塊不需要導出任何東西
export class AppModule { }
