import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  // customers:any='';
 // customersId:any='';
  // id!: number;
  // name:string='';
  customer : Customer = new Customer();
  customers!: Customer[];
  isDivVisible: boolean= false;
  isDivVisible1: boolean= false;

  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit(): void {

    this.reloadData();
    }

    reloadData() {
     this.service.getCustomers()
     .subscribe(
      data => { console.log(data); 
        this.customers = data ;
        console.log(this.customers);
      },
      error => { console.log(error);  alert(error);}
    );
    }

    // reloadData() {
    //   this.customers = this.service.getCustomers();
    // }
   
    remove(customerId:number):void{
       this.service.removeCustomerById(customerId).subscribe ( 
       data => { console.log(data); this.customers=data ;  alert('Customer Data Deleted') ;  this.reloadData()},
       error => { console.log(error);  alert(error);}
       );
    
    }


    detail(customerId:number):void{
      this.isDivVisible=true;
      this.service.getCustomerById(customerId).subscribe ( 
      data => { console.log(data); this.customer=data ;  this.reloadData(); alert('Press OK to continue') ; },
      error => { console.log(error);  alert(error);}
      );
   
   }

   editcust(customerId:number):void{
    this.isDivVisible1=true;
    this.isDivVisible=true;
    this.service.getCustomerById(customerId).subscribe ( 
    data => { console.log(data); this.customer=data ; this.reloadData(); },
    error => { console.log(error);  alert(error);}
    );
 
 }


   edit():void{
    this.isDivVisible1=false;
    this.isDivVisible=false;
    this.service.editCustomer(this.customer).subscribe(
       data => { console.log(data); this.customer=data; },
       error => { console.log(error);  alert(error);}
     );
  

  }


}

