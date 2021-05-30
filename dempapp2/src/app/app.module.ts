import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DataserviceService } from './dataservice.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { AboutComponent } from './about/about.component';
import { AboutchildComponent } from './aboutchild/aboutchild.component';
import { ContactComponent } from './contact/contact.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { AddempComponent } from './addemp/addemp.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { ListBookComponent } from './list-book/list-book.component';
import { BookService } from './book.service';
import { EmployeeComponent } from './employee/employee.component';
import { SortPipe } from './sort.pipe';



@NgModule({
  declarations: [
    AppComponent,
    ViewproductComponent,
    CreateproductComponent,
 
    AboutComponent,
      AboutchildComponent,
      ContactComponent,
      HeroFormComponent,
      AddempComponent,
      ProductFormComponent,
      AddMoviesComponent,
      ListBookComponent,
      EmployeeComponent,
      SortPipe
     
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataserviceService, FormBuilder, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
