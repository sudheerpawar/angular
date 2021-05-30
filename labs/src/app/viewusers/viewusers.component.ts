import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { Users } from '../Users';

@Component({
  selector: 'app-viewusers',
  templateUrl: './viewusers.component.html',
  styleUrls: ['./viewusers.component.css']
})
export class ViewusersComponent implements OnInit {
  users!: Observable<Users[]>;
  user:Users=new Users();
  // product:Product=new Product();

  

  constructor(private service:DataserviceService) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.users = this.service.getUserList();
    console.log(this.users);
  }

   detail(userId:number):void{
    this.service.getUser(userId)
      .subscribe(
        data => { console.log(data); this.user=data; },
        error => { console.log(error);  alert(error);}
      );
     
  }

  remove(userId:number):void{
    this.users = this.service.removeUserById(userId);
  }

  edituser(){
     this.service.editUser(this.user)
      .subscribe(
        data => { console.log(data); alert('user is updated');},
        error => { console.log(error);  alert(error);}
      );
    
  }

}


