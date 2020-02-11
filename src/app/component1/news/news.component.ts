import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public title = '我是一個標題';

  msg='我是一個msg';

  public content="<h2>我是一個html標籤</h2>"

  public student:any="我是一個學生數據";

  public user:object={
    username:"傑森",
    age:12
  }

  public arr:Array<any>=["第一條數據","第二條數據","第三條數據"];

  public userinfo:any[]=[{
    username:"張三",
    age:34
  },{
    username:"李四",
    age:23
  },{
    username:"王五",
    age:40
  }]

  public cars:any[]=[
    {
      cate:"寶馬",
      list:[
        {
          title:"寶馬x1",
          price:"10萬"
        },{
          title:"寶馬x2",
          price:"20萬"
        },{
          title:"寶馬x3",
          price:"30萬"
        }
      ]
    },{
      cate:"奧迪",
      list:[
        {
          title:"奧迪Q1",
          price:"10萬"
        },{
          title:"寶馬Q2",
          price:"20萬"
        },{
          title:"寶馬Q3",
          price:"30萬"
        }
      ]
    }
  ]

  constructor() {
    this.msg="這是給屬性負值---（改變屬性的值）"

    console.log(this.msg);

    this.msg="我是改變後的msg";
   }

  ngOnInit(): void {
  }

}
