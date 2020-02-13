import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-new3',
  templateUrl: './new3.component.html',
  styleUrls: ['./new3.component.css']
})
export class New3Component implements OnInit {

  private data:any[] = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  getData(){
    let api = "http://a.itying.com/api/productlist";
    this.httpClient.get(api).subscribe((response:any) => {
      console.log(response);
      this.data = response.result;
    })
  }

  doPost(){
    //手動設置請求類型
    const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json'}) };
    //存在跨域問題
    let api = "http://127.0.0.1:3000/doLogin";

    let postData:object = {
      username: "audrey",
      age: 23
    }

    this.httpClient.post(api, postData, httpOptions).subscribe((response) => {
      console.log(response);
    })
  }

  getJsonpData(){
    //jsonp 請求服務器必須支持jsonp
    //http://a.itying.com/api/productlist?callback=aaaa

    let api = "http://a.itying.com/api/productlist";

    this.httpClient.jsonp(api, 'callback').subscribe((response) => {
      console.log(response);
    })
  }
}
