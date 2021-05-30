import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  status : string = 'ON';

  books=[
    {
      "bookId":"1001",
      "bookName":"Let Us C",
      "authorName":"DKanitkar"
    },
    {
      "bookId":"1002",
      "bookName":"Let Us C++",
      "authorName":"A Kanitkar"
    },
    {
      "bookId":"1004",
      "bookName":"Let Us C",
      "authorName":"DKanitkar"
    },
    {
      "bookId":"1003",
      "bookName":"Let Us C++",
      "authorName":"A Kanitkar"
    }
 

  ];


  constructor() { }

  ngOnInit(): void {
  }


}
