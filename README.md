# learnAngular

教程地址：https://www.bilibili.com/video/av38362631?p=1
# 
## 1. angular環境搭建：
	1.1 安裝nodejs
	1.2 使用國有鏡像
		$ npm config set registry https://registry.npm.taobao.org --global
	1.3 安裝angular cli
		$ sudo npm install -g @angular/cli
## 2. 新建angular項目
	2.1 新建一個名為myProject的項目
		$ ng new myProject
	2.2 運行
		$ ng serve --open
## 3. 新建組件
	3.1 在components文件夾下新建一個名為news的組件
		$ ng g component components/news
	3.2 根組件調用news組件
		根組件html：<app-news></app-news>
## 4. 新建服務
	4.1 在services文件夾下創建一個名為storage的服務
		$ ng g service services/storage
	4.2 app.module.ts 裡面引入服務 並聲明
		import { StorageService } from './services/storage.service';
		providers: [StorageService]
	4.3 在使用的組件裡面
		- 引入服務
			import { StorageService } from '../../services/storage.service';
		- 初始化
			constructor(
			    private storage: StorageService
			  ) { 
			  	//調用服務裡的方法
			    console.log(storage.get()) ;
			  }


