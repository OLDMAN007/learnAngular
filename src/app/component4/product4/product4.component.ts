import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-product4',
  templateUrl: './product4.component.html',
  styleUrls: ['./product4.component.css']
})
export class Product4Component implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goProContent1(){
    //普通路由
    this.router.navigate(["/home"]);
    //動態路由
    this.router.navigate(["/product/productContent","123"]);
  }

  goProContent2(){
    let queryParams: NavigationExtras = {
      queryParams: {pid: 123}
    }
    this.router.navigate(["/product/productContent"], queryParams);
  }

}
