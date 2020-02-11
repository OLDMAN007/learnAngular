import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dom-and-view-child',
  templateUrl: './dom-and-view-child.component.html',
  styleUrls: ['./dom-and-view-child.component.css']
})
export class DomAndViewChildComponent implements OnInit {

  public flag:boolean = true;

  //ViewChild獲取dom節點
  @ViewChild("myBox") myBox:any;
  @ViewChild("header") header:any;

  constructor() { }

  ngOnInit(): void {

    //組件和指令初始化完成      並不是真正的dom加載完成

    let box1:any = document.getElementById("box1");
    console.log(box1.innerHTML);
    box1.style.color = "red";

    //獲取不到dom節點
    /*
      let box2:any = document.getElementById("box2");
      console.log(box2.innerHTML);
      box2.style.color = "blue";
    */
    
  }

  /**
   * 視圖加載完成以後出發的方法     dom加載完成(建議把dom操作放在這裡面)
   */
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    //dom
    let box2:any = document.getElementById("box2");
    console.log(box2.innerHTML);
    box2.style.color = "blue";

    //ViewChile
    console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.width = "120px";
    this.myBox.nativeElement.style.height = "60px";
    this.myBox.nativeElement.style.background = "yellow";
    console.log(this.myBox.nativeElement.innerHTML);
    
  }

  runHeader(){
    this.header.run();
  }
}
