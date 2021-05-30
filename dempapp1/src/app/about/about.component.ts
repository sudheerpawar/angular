import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  birthday : Date = new Date(1987, 6, 18);
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  title : string = 'Welcome to Angular 7'

  constructor() { }


  ngOnInit(): void {
  }

}
