import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  userForm: any;
  constructor(private formBuilder:FormBuilder) { }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      email: ['',[Validators.required]],
      contactno: ['', [Validators.required]],
      query: ['' , [Validators.required]]
    });
  }
  onSubmit(){
    if(this.userForm.valid){
      alert('User form is valid!!')
    } else {
      alert('User form is not valid!!')
    }
    }
}