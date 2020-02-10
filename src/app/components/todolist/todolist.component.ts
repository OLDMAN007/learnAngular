import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyword:string;

  public historyList:any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  keyDown(e){
    if(e.keyCode == 13){
      this.addDate();
    }
  }

  addDate(){
    let keyword = this.trim(this.keyword);
    if (keyword == null || keyword == ""){
      alert("空數據");
      return null;
    }
    if(!this.hasKeyword(this.historyList, keyword)){
      this.historyList.push({
        title:keyword,
        status:0
      });
    } else{
      alert("數據已存在!");
    }
    this.keyword = '';
  }

  doDelete(key){
    this.historyList.splice(key,1);
  }

  hasKeyword(historyList:any, keyword:any){

    //異步，會存在問題
    // historyList.forEach(history => {
    //   if(history.title == keyword){
    //     return true;
    //   }
    // });
  
    if(keyword == null) return false;

    for(let i=0;i<historyList.length; i++){
      if(historyList[i].title == keyword){
        return true;
      }
    }

    return false;
  }

  trim(x:string){
    return x.replace(/^\s+|\s+$/gm,'');
  }
}
