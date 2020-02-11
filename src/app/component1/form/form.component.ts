import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public cityList:any = ["北京", "上海", "深圳"];

  public peopleInfo:any = {
    username:"",
    gender:"male",
    city:"北京",
    hobby:[
      {
        hobbyName:"吃飯",
        checked:false
      },
      {
        hobbyName:"睡覺",
        checked:false
      },
      {
        hobbyName:"橋代碼",
        checked:true
      }
    ],
    note:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  doSubmit(){
    console.log(this.peopleInfo);
  }

}
