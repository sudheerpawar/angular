import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { Product } from '../Product';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent implements OnInit {

  product : Product = new Product();
  constructor(private service:DataserviceService) { }

  ngOnInit(): void {
  }

  saveproduct(){
    this.service.createProduct(this.product)
     .subscribe(
       data => { console.log(data); alert('Product is added');},
       error => { console.log(error);  alert(error);}
     );
   
 }
}
