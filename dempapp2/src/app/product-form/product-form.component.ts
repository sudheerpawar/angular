import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from "@angular/forms";
import { FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  addForm!: FormGroup;
  Submitted! : boolean;
  category = ['SmartGrocery', 'Mobile',  
  'Electronic', 'Cloth'];
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      productID: ['', Validators.required],
      productName: ['', Validators.required],
      productCost: ['', Validators.required],
      productOnline: ['', Validators.required],
      productCategory: ['', Validators.required],
      available: ['', Validators.required],

    });
  }

  onSubmit(){
    this.Submitted=true;
    if (this.addForm.invalid) {
      alert('sorry..invalid..');
      return;  }
    else{
      alert('Record is added ....');
      console.log(this.addForm.value);
    }
 }
}
