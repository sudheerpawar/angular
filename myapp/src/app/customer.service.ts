import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { identifierModuleUrl } from '@angular/compiler';
import { Customer } from './Customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
 

  private baseUrl = 'http://localhost:8082/api/v1';

  constructor(private http: HttpClient) { }


  getCustomers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallcustomers`);
  }

  removeCustomerById(id:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/deletecustomerByCustomerId/`+id);
  }

  getCustomerById(id: number): Observable<any> {
  return this.http.get(`${this.baseUrl}/viewCustomerbyCustomerId/${id}`);
  }

  addCustomer(customer: Customer): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/insertcustomer/`, customer);
  }
  editCustomer(customer: Customer): Observable<any> {
    return this.http.put(`${this.baseUrl}` + `/updatecustomer/`, customer); 
  }
}
