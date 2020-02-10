import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transition',
  templateUrl: './transition.component.html',
  styleUrls: ['./transition.component.css']
})
export class TransitionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showAside(){
    let aside = document.getElementById("aside");
    aside.style.transform = "translate(0, 0)";
  }

  hideAside(){
    let aside = document.getElementById("aside");
    aside.style.transform = "translate(100%, 0)";
  }
}
