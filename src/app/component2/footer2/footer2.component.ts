import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css']
})
export class Footer2Component implements OnInit {

  // 用EventEmitter 和 Output 配合使用 <string> 指定數據類型
  @Output() private outer = new EventEmitter<string>();

  private msg:string = "this is child msg";

  constructor() { }

  ngOnInit(): void {
  }

  run(){
    alert("this is child run method");
  }

  /**
   * 子組件通過 EventEmitter 對象 outer 實例廣播數據
   */
  sendParent(){
    this.outer.emit("msg from child");
  }
}
