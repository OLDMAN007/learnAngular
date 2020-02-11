import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit {

  //接收父組件傳過來的數據 
  @Input() title:any;
  @Input() msg:any;
  @Input() run:any;

  constructor() { }

  ngOnInit(): void {
  }

  getParentRun(){
    //執行父組件的run方法
    this.run();
  }
}
