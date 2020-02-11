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
## 5. 雙向數據綁定
	5.1 app.module.ts 引入表單相關模塊
		import { FormsModule } from '@angular/forms';
	5.2 app.module.ts中聲明模塊
		import:[FormsModule]
	5.3 組件ts中聲明一個數據
		public usernames:tring = "hepburn";
	5.4 前端綁定數據
		<input type="text" name="" id="" [(ngModel)]="username">
## 6. 獲取dom節點
	- 原生js
		let box2:any = document.getElementById("box2");
		console.log(box2.innerHTML);
		box2.style.color = "blue";
	- ViewChild
		1. 模板中給dom起一個名字
			<div #myBox></div>
		2. 在業務邏輯中引入ViewChild
			import { ViewChild } from '@angular/core';
		3. 獲取dom節點
			@ViewChild("myBox") myBox:any;
		4. ngAfterViewInit生命週期函數裡面獲取dom
			console.log(this.myBox.nativeElement);
			this.myBox.nativeElement.style.width = "120px";
			this.myBox.nativeElement.style.height = "60px";
			this.myBox.nativeElement.style.background = "yellow";
			console.log(this.myBox.nativeElement.innerHTML);
## 7. 組件通訊
	- 子組件獲取父組件中的數據和方法
		1 在父組件中聲明需要傳遞的數據或方法
			public msg:string = "parent component msg";
		2 父組件調用子組件header時傳入mgs
			<app-header [msg] = "mgs"></app-header>
		3 子組件中接收參數或方法
			import { Input } from '@angular/core';
			@Input() msg:any;
		4 父組件中使用參數或方法
		5 可以將整個父組件傳給子組件
			<app-header [parentComponent] = "this"></app-header>
	- 父組件獲取子組件中的數據和方法
		- ViewChild
			1. 在子組件中聲明數據或方法
				public msg:string = "child component msg";
				run(){
					console.log("child method run");
				}
			2. 父組件引用子組件，並聲明dom節點
				<app-footer #footer></app-footer>
			3. 父組件獲取子組件的數據或執行子組件的方法
				import { ViewChild } from '@angular/core';
				@ViewChild("footer") footer:any;
				this.footer.msg;
				this.footer.run();
		- @Output
			1. 子組件引入 Output 和 EventEmitter 
			
	- 非父子組件通訊
		1. 使用localStorage
		2. 使用服務
