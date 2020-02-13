import { Component, OnInit } from '@angular/core';
import { Request2Service } from '../../service2/request2.service';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home3',
  templateUrl: './home3.component.html',
  styleUrls: ['./home3.component.css']
})
export class Home3Component implements OnInit {

  constructor(
    private request: Request2Service
  ) { }

  ngOnInit(): void {

    /**
     * 1. 同步方法
     */
     let data = this.request.getData();
     console.log(data);


     /**
      * 2. callbackData回調函數獲取異步數據
      */
      this.request.callbackData((data)=>{
        console.log(data);
      })

      /**
       * 3. promise獲取異步數據
       */
      let promise = this.request.getPromiseData();
      promise.then((data)=>{
        console.log(data);
      })

      /**
       * 4. Rxjs
       */
      let rxjsData = this.request.getRxjsData();
      rxjsData.subscribe((data)=>{
        console.log(data);
      })

      /**
       * rxjs 要比 promise 強大的多
       * 例如：
       *  rxjs可以中途撤回、發射多個值、提供多種工具函數
       */

       // rxjs unsubscribe 取消訂閱
       let treem = this.request.getRxjsData();
       let t = treem.subscribe((data)=>{
         console.log(data);
       })

       setTimeout(() => {
         t.unsubscribe();   //取消訂閱
       }, 1000);

       //多次執行
      //  let rxjsIntervalData = this.request.getRxjsIntervalData();
      //  let i = rxjsIntervalData.subscribe(data=>{
      //    console.log(data);
      //  })
      //  setTimeout(()=>{
      //    i.unsubscribe();
      //  },10000)

       //工具函數
       //filter
      //  let rxjsIntervalNum = this.request.getRxjsIntervalNum();
      //  rxjsIntervalNum.pipe(
      //    filter((value) => {
      //      if(value%2 == 0){
      //        return true;
      //      }
      //    })
      //  )
      //  .subscribe((data) => {
      //    console.log(data);
      //  })

       //map
      //  let rxjsIntervalNum = this.request.getRxjsIntervalNum();
      //  rxjsIntervalNum.pipe(
      //    map((value) => {
      //      return value * value;
      //    })
      //  ).subscribe((data) => {
      //    console.log(data);
      //  })

      //多個函數共用
      let rxjsIntervalNum = this.request.getRxjsIntervalNum();
      let r = rxjsIntervalNum.pipe(
        filter((value) => {
          if(value % 2 ==0){
            return true;
          }
        }),
        map((value) => {
          return value * value;
        })
      ).subscribe((data) => {
        console.log(data);
      })
      setTimeout(() => {
        r.unsubscribe();
      }, 10000);
  }

}
