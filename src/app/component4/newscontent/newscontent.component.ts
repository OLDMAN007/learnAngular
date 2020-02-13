import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {

  constructor(
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    //get傳值
    // this.router.queryParams.subscribe((value:any) => {
    //   console.log(value);
    // })

    //動態路由傳值
    this.router.params.subscribe((value) => {
      console.log(value);
    })
  }

}
