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
## 8. 生命週期函數
	- ngOnChanges()
		當 Angular（重新）設定資料繫結輸入屬性時響應。 該方法接受當前和上一屬性值的 SimpleChanges 物件在ngOnInit() 之前以及所繫結的一個或多個輸入屬性的值發生變化時都會呼叫。
	- ngOnInit()
		在 Angular 第一次顯示資料繫結和設定指令/元件的輸入屬性之後，初始化指令/元件。在第一輪 ngOnChanges() 完成之後呼叫，只調用一次。
	- ngDoCheck()
		檢測，並在發生 Angular 無法或不願意自己檢測的變化時作出反應。在每個變更檢測週期中，緊跟在 ngOnChanges() 和 ngOnInit() 後面呼叫。
	- ngAfterContentInit()
		當 Angular 把外部內容投影進元件/指令的檢視之後呼叫。第一次 ngDoCheck() 之後呼叫，只調用一次。
	- ngAfterContentChecked()
		每當 Angular 完成被投影元件內容的變更檢測之後呼叫。ngAfterContentInit() 和每次 ngDoCheck() 之後呼
	- ngAfterViewInit()
		當 Angular 初始化完元件檢視及其子檢視之後呼叫。第一次 ngAfterContentChecked() 之後呼叫，只調用一次。
	- ngAfterViewChecked()
		每當 Angular 做完元件檢視和子檢視的變更檢測之後呼叫。ngAfterViewInit() 和每次 ngAfterContentChecked() 之後呼叫。
	- ngOnDestroy()
		每當 Angular 每次銷毀指令/元件之前呼叫並清掃。 在這兒反訂閱可觀察物件和分離事件處理器，以防記憶體洩漏。在 Angular 銷毀指令/元件之前呼叫。
## 9. 異步數據流
	- 回調函數
		1. 在服務中編寫方法
			callbackData(callback){
				setTimeout(() => {
				var username = "callback";
				callback(username);
				}, 1000);
			}
		2. 組件中調用方法
			this.request.callbackData((data)=>{
				console.log(data);
			})
	- 事件監聽/發布訂閱
		
	- promise
		1. 在服務中編寫方法
			getPromiseData(){
				return new Promise((resolve, rejects)=> {
				setTimeout(() => {
					var username = "promise";
					resolve(username);
				}, 1000);
				})
			}
		2. 組件中調用
			let promise = this.request.getPromiseData();
			promise.then((data)=>{
				console.log(data);
			})
	- Rxjs
		1. 在服務中編寫方法
			getRxjsData(){
				return new Observable<any>(observer =>{
				setTimeout(() => {
					var username = "rxjs";
					observer.next(username);
					// observer.error("返回失敗數據");
				}, 1000);
				})
			}
		2. 組件中調用
			let rxjsData = this.request.getRxjsData();
			rxjsData.subscribe((data)=>{
				console.log(data);
			})
		- rxjs 要比 promise 強大的多, rxjs可以中途撤回、發射多個值、提供多種工具函數
			- 取消訂閱
				let treem = this.request.getRxjsData();
				let t = treem.subscribe((data)=>{
					console.log(data);
				})
				setTimeout(() => {
					t.unsubscribe();   //取消訂閱
				}, 1000);
			- 多次執行
				getRxjsIntervalData(){
					let count = 0;
					return new Observable<any>(observer =>{
					setInterval(()=>{
						count++;
						let username = "rxjs interval " + count;
						observer.next(username);
					},1000)
					})
				}
			- 工具函數 map filter
				1. 引入依賴
					import { map, filter } from 'rxjs/operators';
				2. 編寫服務
					getRxjsIntervalNum(){
						let count = 0;
						return new Observable<number>(observer => {
						setInterval(()=>{
							count++;
							observer.next(count);
						},1000)
						})
					}
				3. 使用工具函數
					let rxjsIntervalNum = this.request.getRxjsIntervalNum();
					let r = rxjsIntervalNum.pipe(
						filter((value) => {
						if(value % 2 ==0){
							return true;
						}
						}),
						map((value) => {
						return value * value;
						})
					).subscribe((data) => {
						console.log(data);
					})
					setTimeout(() => {
						r.unsubscribe();
					}, 10000);
## 10. 數據交互
	- get 請求數據
		1. app.module.ts 中引入 HttpClientModule 並注入
			import { HttpClientModule } from '@angular/common/http';
			imports: [ HttpClientModule ]
		2. 組件中引入 HttpClient 並聲明
			import { HttpClient } from '@angular/common/http';
			constructor(
				private httpClient: HttpClient
			) { }
		3. get 請求數據
			getData(){
				let api = "http://a.itying.com/api/productlist";
				this.httpClient.get(api).subscribe((response) => {
					console.log(response);
				})
			}
	- post 提交數據
		1. 同上
		2. 組件中引入 HttpClient, HttpHeaders 並注入 HttpClient
			import { HttpClient, HttpHeaders } from '@angular/common/http';
			constructor(
				private httpClient: HttpClient
			) { }
		3. post 提交數據
			doPost(){
				const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
				let api = "http://127.0.0.1:3000/doLogin";
				this.httpClient.post(api, {'username':'harper','age':13}, httpOptions).subscribe((response) => {
					console.log(response);
				})
			}
	- jsonp 請求數據
		1. app.module.ts 中引入 HttpClientModule, HttpClientJsonpModule 並注入
			import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
			imports: [ HttpClientModule, HttpClientJsonpModule ]
		2. import { HttpClient } from '@angular/common/http';
			constructor(
				private httpClient: HttpClient
			) { }
		3. jsonp 請求數據
			getJsonpData(){
				let api = "http://a.itying.com/api/productlist";
				this.httpClient.jsonp(api, 'callback').subscribe((response) => {
					console.log(response);
				})
			}
	- 使用第三方模塊 axios 請求數據
## 11. 路由
	- 跳轉頁面
		1. 創建帶路由的項目
		2. 創建所需組件
		3. 在 app-routing.module.ts 中引入創建的組件
			import { Home4Component } from './component4/home4/home4.component';
			import { News4Component } from './component4/news4/news4.component';
			import { Product4Component } from './component4/product4/product4.component';
		4. 在 app-routing.module.ts 中配置路由
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
				},
			];
	- 路由傳值
		- get 傳值
			1. 跳轉
				<li *ngFor="let item of list; let key = index">
					<a [routerLink]="[ '/news/newsContent' ]" [queryParams]="{aid:key}">{{key}---{{item}}</a>
				</li>
			2. 接收
				import { ActivatedRoute } from '@angular/router';
				constructor(
					private router: ActivatedRoute
				) { }
				this.router.queryParams.subscribe((value:any) => {
					console.log(value);
				})
		- 動態路由傳值
			1. app-routing.module.ts 配置動態路由
				import { NewscontentComponent } from './component4/newscontent/newscontent.component';
				const routes: Routes = [
					{
						path: "news/newsContent/:aid",
						component: NewscontentComponent
					}
				];
			2. 傳值
				<li *ngFor="let item of list; let i=index">
					<a [routerLink]="[ '/news/newsContent', i ]">{{i}}---{{item}}</a>
				</li>
			3. 接收
				import { ActivatedRoute } from '@angular/router';
				constructor(
					private router: ActivatedRoute
				) { }
				this.router.params.subscribe((value) => {
					console.log(value);
				})
		- js 跳轉
			- 動態路由的 js 跳轉
				1. 引入 Router 模塊 並聲明
					import { Route } from '@angular/router';
					constructor(
						private router: Route
					) { }
				2. 跳轉頁面
					goProContent(){
						//普通路由
						this.router.navigate(["/home"]);
						//動態路由
						this.router.navigate(["/product/productContent","123"]);
					}
			- 路由 get 傳值 js 跳轉
				1. 引入 Router 模塊 並聲明
					import { Route, NavigationExtras } from '@angular/router';
					constructor(
						private router: Route
					) { }
				2. 跳轉頁面
					goProContent(){
						let queryParams: NavigationExtras = {
							queryParams: {pid: 123}
						}
						this.router.navigate(["/product/productContent"], queryParams);
					}
		