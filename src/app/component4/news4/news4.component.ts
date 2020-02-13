import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news4',
  templateUrl: './news4.component.html',
  styleUrls: ['./news4.component.css']
})
export class News4Component implements OnInit {

  public list:any[] = [];

  constructor() { }

  ngOnInit(): void {

    for(var i = 0; i < 10; i++){
      this.list.push("這是第" + i + "條新聞");
    }
  }

}
