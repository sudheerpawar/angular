import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab1',
  templateUrl: './lab1.component.html',
  styleUrls: ['./lab1.component.css']
})
export class Lab1Component implements OnInit {

  name:string="";
  id: number=0;
  salary: number=0;
  department:string="";

  constructor() { }

  ngOnInit(): void {
  }

  add():void{
    alert(this.id+" "+this.name+" "+this.salary+" "+this.department);
  }
}
