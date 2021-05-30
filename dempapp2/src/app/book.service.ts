import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Book';

@Injectable()
export class BookService{
client:HttpClient ;
constructor(client:HttpClient ){
this.client=client;
}
  
books:Book[]=[];


fetchBooks():Observable<Book[]>
{
  
  let url='assets/books.json';
  let observable:Observable<Book[]> =this.client.get<Book[]>(url);
  return observable;
}

}