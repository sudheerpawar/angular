import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { AddempComponent } from './addemp/addemp.component';
import { ContactComponent } from './contact/contact.component';
import { CreateproductComponent } from './createproduct/createproduct.component';
import { EmployeeComponent } from './employee/employee.component';

import { HeroFormComponent } from './hero-form/hero-form.component';
import { ListBookComponent } from './list-book/list-book.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';


const routes: Routes = [
  {path:'view' , component:ViewproductComponent},
  {path:'create' , component:CreateproductComponent},
  {path:'about' , component:AboutComponent},
  {path:'contact' , component:ContactComponent},
  {path:'template1' , component:HeroFormComponent},
  {path:'addemp' , component:AddempComponent},
  {path:'addprod' , component:ProductFormComponent},
  {path:'addmovie' , component:AddMoviesComponent},
  {path:'booklist' , component:ListBookComponent},
  {path:'sortlist' , component:EmployeeComponent}








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
