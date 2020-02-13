import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Request2Service {

  constructor() { }

  /**
   * 
   */
  getData(){
    return "this is a service data";
  }

  /**
   * 回調函數
   * @param callback 
   */
  callbackData(callback){
    setTimeout(() => {
      var username = "callback";
      callback(username);
    }, 1000);
  }

  /**
   * promise
   */
  getPromiseData(){
    return new Promise((resolve, rejects)=> {
      setTimeout(() => {
        var username = "promise";
        resolve(username);
      }, 2000);
    })
  }

  /**
   * rxjs
   */
  getRxjsData(){
    return new Observable<any>(observer =>{
      setTimeout(() => {
        var username = "rxjs";
        observer.next(username);
      }, 2000);
    })
  }

  /**
   * rxjs 定時器 多次執行
   */
  getRxjsIntervalData(){
    let count = 0;
    return new Observable<any>(observer =>{
      setInterval(()=>{
        count++;
        let username = "rxjs interval " + count;
        observer.next(username);
      },1000)
    })
  }

  /**
   * 
   */
  getRxjsIntervalNum(){
    let count = 0;
    return new Observable<number>(observer => {
      setInterval(()=>{
        count++;
        observer.next(count);
      },1000)
    })
  }
}
