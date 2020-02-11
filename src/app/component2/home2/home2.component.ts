import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {

  public title:string = "首頁組件的header";
  public msg:string = "我是首頁組件的msg";

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    console.log("我是首頁組件的run方法");
  }
}
