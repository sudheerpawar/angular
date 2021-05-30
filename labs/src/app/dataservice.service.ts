import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Users } from './Users';
 
@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  private baseUrl = 'http://localhost:8082/user/v1';
  constructor(private http: HttpClient) { }

  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/getallusers`);
  }

  removeUserById(userId:number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/removeuser/`+userId);
  }

  createProduct(user: Users): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/addUser/`, user);
  }

  getUser(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/getuserbyid/${userId}`);
  }

   editUser(user: Users): Observable<any> {
    return this.http.put(`${this.baseUrl}/updateuser/`, user);
  }

  userLogin(userName:string,password:string) : Observable<any>{

    return this.http.get(`${this.baseUrl}/userlogin/${userName}/${password}`);

  }

  getUserById(userId:any) : Observable<any>{

    return this.http.get(`${this.baseUrl}/getuserbyid/${userId}`);

  }

}