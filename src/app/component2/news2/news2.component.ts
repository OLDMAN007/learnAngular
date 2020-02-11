import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news2',
  templateUrl: './news2.component.html',
  styleUrls: ['./news2.component.css']
})
export class News2Component implements OnInit {

  @ViewChild("footer") footer:any;

  constructor() { }

  ngOnInit(): void {
  }

  getChildMsg(){
    alert(this.footer.msg);
  }

  runChildMethod(){
    this.footer.run();
  }

  run(e){
    console.log(e);
  }
}
