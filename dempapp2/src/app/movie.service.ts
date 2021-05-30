import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from './Movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private baseUrl = 'http://localhost:8082/api/v1';

  constructor(private http: HttpClient) { }
  createMovie(movie:Movie): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/create`, movie);
  }

  getMovieList(type : string): Observable<any> {
    //  return this.http.get(`${this.baseUrl}/getall`);
     return this.http.get(`${this.baseUrl}/findByCategory/${type}`).pipe(catchError(this.handleError));
  }
  
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
        console.error('Client Side Error: ' , error.error.message);
    }else{
      console.error('Server Side Error: ', error);
    }
    return throwError('There is problem with Service');
  }
}
  







