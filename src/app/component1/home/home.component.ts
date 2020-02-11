import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public picUrl="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

  public list:any[]=[
    {
      title:'其實新聞1'
    },{
      title:'其實新聞2'
    },{
      title:'其實新聞3'
    }
  ];

  public flag:boolean=false;

  /**
   * 1. 已支付 
   * 2. 已支付並確認
   * 3. 已發貨
   * 4. 已售貨
   * 其他. 訂單無效
   */
  public orderStatus:number=1;

  public attr:string='red';

  public today:any=new Date();

  public title:string="我是一個title";

  public keyWord:string = "這是默認值";

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    alert("這是一個字定義方法!")
  }

  getDate(){
    // alert(this.list[1].title);
    alert(this.title);
  }

  setDate(){
    this.title="我是改變後的title";
  }

  keyDown(e){
    if(e.keyCode==13){
      console.log("按了一下回車")
    } else {
      console.log(e);
    }
  }

  keyUp(e){
    if(e.keyCode==13){
      console.log(e.target.value);
    } 
  }

  runEvent(e){
    let dom = e.target;
    dom.style.color = "red";
  }

  changeKeyWord(){
    this.keyWord = "我是改變後的keyWord";
  }

  getKeyWord(){
    console.log(this.keyWord);
  }
}
