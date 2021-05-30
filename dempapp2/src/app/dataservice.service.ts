import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';  
import { Observable, throwError } from 'rxjs';
import { Product } from './Product';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {


private baseUrl = 'http://localhost:8082/api/v1';



  constructor(private http: HttpClient) { }

  getProductList(): Observable<any> {
    // return this.http.get(`${this.baseUrl}/getall`);
    return this.http.get(`${this.baseUrl}/getall`).pipe(catchError(this.handleError));
  }
  
  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
        console.error('Client Side Error: ' , error.error.message);
    }else{
      console.error('Server Side Error: ', error);
    }
    return throwError('There is problem with Service');
  }


  removeProductById(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deleteproduct/`+id);
  }

  createProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/create`, product);
  }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getproduct/${id}`);
  }

  editProduct(product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateproduct`, product);
  }

  getAboutUs() {
    return this.http.get('assets/about.json');
  }

  
  
}