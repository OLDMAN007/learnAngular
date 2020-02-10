import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public keyword:string;

  public historyList:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  keyDown(e){
    // console.log(e);
    if(e.keyCode == 13){
      this.doSearch();
    }
  }

  doSearch(){

    //歷史中不存在此搜索則添加
    if(this.historyList.indexOf(this.keyword) == -1){
      this.historyList.push(this.keyword);
    }

    this.keyword = "";
  }

  doDelete(key){
    //從key起刪除一個
    this.historyList.splice(key,1);
  }
}
