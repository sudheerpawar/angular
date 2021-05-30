import { Component, OnInit } from '@angular/core';

import { BookService } from '../book.service';
import { Observable } from 'rxjs';
import { Book } from '../Book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  service:BookService;
  books:Book[]=[];
  copy:Book[]=[];
  orderByField:string='';
  constructor(service:BookService) {
    this.service=service;
    let fetched:Observable<Book[]>= this.service.fetchBooks();
    fetched.subscribe(
      books=>{
            this.books=books;
            this.copy=this.copyArray(this.books);
    },
     err=>{
      
      });
    
  }
  copyArray(arr:Book[]):Book[]{
    let copied=[];  
    for(let book of arr){
      copied.push(book);
    }
    return copied;
    }

  ngOnInit(): void {
  }
  orderBy(field:string){
    this.orderByField=field;     
  }
  filterById(id:number){
    // console.log("inside filterById()id="+id);
    if(id===null ){
      this.books=this.copy;
      return;
     }
     let idString=id.toString(); 

     let filtered=[];
     for(let book of this.copy){
       let bookIdString=book.id.toString();
       let foundFlag=bookIdString.startsWith(idString);
        if(foundFlag){
          filtered.push(book);
        }
     }
     
      this.books=filtered;   
    
  }
  filterByTitle(name:string){
    
    if(name===null){
      this.books=this.copy;
      return;
    }
    let filtered=[];
    for(let book of this.copy){
      let foundFlag=book.title.startsWith(name);
       if(foundFlag){
         filtered.push(book);
       }
    }
    
    this.books=filtered;
  }


  filterByYear(year:number){
    if(year===null){
      this.books=this.copy;  
      return;
     }
     let idString=year.toString(); 

     let filtered=[];
     for(let book of this.copy){
       let bookIdStr=book.year.toString();
       let foundFlag=bookIdStr.startsWith(idString);
        if(foundFlag){
          filtered.push(book);
        }
     }
     this.books=filtered;
    
  }
  filterByAuthor(author:string){
    if(author===null){
      this.books=this.copy;
      return;
    }
    let filtered=[];
    for(let book of this.copy){
      let foundFlag=book.author.startsWith(author);
       if(foundFlag){
         filtered.push(book);
       }
    }
    console.log("adding filtered");
    this.books=filtered;
  }


}