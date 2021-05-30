import { Component, Input, OnInit } from '@angular/core';
import { About } from '../about/about';

@Component({
  selector: 'app-aboutchild',
  templateUrl: './aboutchild.component.html',
  styleUrls: ['./aboutchild.component.css']
})
export class AboutchildComponent implements OnInit {
 
  @Input()
  about: About = new About;
  constructor() { }

  ngOnInit(): void {
  }

}
