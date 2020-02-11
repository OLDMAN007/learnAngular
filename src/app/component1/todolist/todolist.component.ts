import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../service1/storage.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  public keyword:string;

  public historyList:any[] = [];

  constructor(
    private storage: StorageService
  ) { }

  ngOnInit(): void {
    let todolist:any = this.storage.get("toDoList");

    if(todolist){
      this.historyList = todolist;
    }
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

      this.storage.set("toDoList", this.historyList);
    } else{
      alert("數據已存在!");
    }
    this.keyword = '';
  }

  doDelete(key){
    this.historyList.splice(key,1);

    this.storage.set("toDoList", this.historyList);
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

  //去除 x 的開頭和結尾的空格
  trim(x:string){
    return x.replace(/^\s+|\s+$/gm,'');
  }

  checkboxChange(){
    this.storage.set("toDoList", this.historyList);
  }
}
