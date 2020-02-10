/**這個文件是angular根模塊，告訴angular如何組裝應用 */

//BrowserModule 瀏覽器解析的模塊
import { BrowserModule } from '@angular/platform-browser';
//angular核心模塊
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//根組件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';

import { FormsModule } from '@angular/forms';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component'

//引入服務
import { StorageService } from './services/storage.service'

/**@Ngmodule裝飾器 接收一個願數據對象，告訴angular如何編譯和啟動應用 */
@NgModule({
  /**配置當前項目運行的組件 */
  declarations: [
    AppComponent,
    NewsComponent,
    HomeComponent,
    FormComponent,
    SearchComponent,
    TodolistComponent
  ],
  /**配置當前模塊運行依賴的其他模塊 */
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  /**配置項目所需要的服務 */
  providers: [StorageService],
  /**執行應用的主視圖（稱為根組件）通過引導根AppModule來啟動應用，這裡一般寫的是根組件 */
  bootstrap: [AppComponent]
})

//根模塊不需要導出任何東西
export class AppModule { }
