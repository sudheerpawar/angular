import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { Users } from '../Users';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent implements OnInit {
  users!: Observable<Users[]>;
  user:Users=new Users();

  constructor(private service:DataserviceService) { }

  ngOnInit(): void {
  }

  saveuser(){
    this.user.role='Customer';
     this.service.createProduct(this.user)
      .subscribe(
        data => { console.log(data); alert('user is added');},
        error => { console.log(error);  alert(error);}
      );
    
  }

}
