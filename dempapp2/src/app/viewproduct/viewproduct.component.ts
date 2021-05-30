import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DataserviceService } from '../dataservice.service';
import { Product } from '../Product';
@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  products!: Product[];
  product: Product = new Product();
  constructor(private service:DataserviceService) { }
  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    //this.products = this.service.getProductList();
    this.service.getProductList()
      .subscribe(
        data => { console.log(data); 
         // this.products = data as Product[];
          this.products = data ;
          console.log(this.products);
        },
        error => { console.log(error);  alert(error);}
      );
  }

  remove(pid:number):void{
    //this.products = this.service.removeProductById(pid);
    this.service.removeProductById(pid)
      .subscribe(
        data => { console.log(data); 
         // this.products = data as Product[];
          this.products = data ;
          console.log(this.products);
        },
        error => { console.log(error);  alert(error);}
      );
     
  }

  detail(pid:number):void{
    this.service.getProduct(pid)
      .subscribe(
        data => { console.log(data); this.product=data; },
        error => { console.log(error);  alert(error);}
      );
     
  }

  editproduct():void{
    this.service.editProduct(this.product)
    .subscribe(
      data => { console.log(data); this.product=data; this.reloadData(); },
      error => { console.log(error);  alert(error);}
    );
  }

}