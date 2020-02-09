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
    console.log(e);
    if(e.keyCode == 13){
      this.doSearch();
    }
  }

  doSearch(){
    this.historyList.push(this.keyword);

    this.keyword = "";
  }
}
