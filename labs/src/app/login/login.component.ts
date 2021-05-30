import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataserviceService } from '../dataservice.service';
import { Users } from '../Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   users!: Observable<Users[]>;
  user:Users=new Users();
  constructor(private service:DataserviceService, private router:Router) { }

  ngOnInit(): void {
  }
  login():void{
     this.user.role='Customer';
     this.service.userLogin(this.user.userName,this.user.password)
      .subscribe(
        data => { console.log(data); alert('user is logged');
      this.user=data;
      sessionStorage.setItem('userName',this.user.userName);
      sessionStorage.setItem('userId',this.user.userId+'');
      this.router.navigate(['/userhome'])
      },
        error => { console.log(error);  alert(error);}
      );
    
  }

  }


