import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  status: string ='';
  users : any='';

  constructor(private service : DataserviceService) { }
 
  ngOnInit(): void {
    this.service.getUsers().subscribe(mydata => {
      this.users = mydata.data;
      console.log(this.users);//optional 
    });
  }
  click2() {   
    this.status=this.service.clicks();
    
  }
}
