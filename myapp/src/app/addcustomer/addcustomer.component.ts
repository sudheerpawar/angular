import { Component, OnInit } from '@angular/core';
import { Customer } from '../Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.component.html',
  styleUrls: ['./addcustomer.component.css']
})
export class AddcustomerComponent implements OnInit {
  customer : Customer = new Customer();
  constructor(private service:CustomerService) { }

  ngOnInit(): void {
  }

  saveproduct(){
    this.service.addCustomer(this.customer)
     .subscribe(
       data => { console.log(data); alert('Customer is added');},
       error => { console.log(error);  alert(error);}
     );
   
 }
}
