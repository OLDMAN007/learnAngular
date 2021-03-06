import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service1/storage.service'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public keyword:string;

  public historyList:any[] = [];

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    console.log("刷新頁面會觸法這個生命週期函數");

    let searchList:any = this.storage.get("searchList");

    if(searchList){
      this.historyList = searchList;
    }
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

      this.storage.set("searchList", this.historyList);
    }

    this.keyword = "";
  }

  doDelete(key){
    //從key起刪除一個
    this.historyList.splice(key,1);

    this.storage.set("searchList", this.historyList);
  }
}
