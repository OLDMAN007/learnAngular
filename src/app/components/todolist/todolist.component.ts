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
    if(!this.hasKeyword(this.historyList, this.keyword)){
      this.historyList.push({
        title:this.keyword,
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

    if(!keyword) return false;

    for(let i=0;i<historyList.length; i++){
      if(historyList[i].title == keyword){
        return true;
      }
    }

    return false;
  }

}
