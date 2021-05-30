import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
import { ViewusersComponent } from './viewusers/viewusers.component';
// import { CreateproductComponent } from './createproduct/createproduct.component';
// import { ViewproductComponent } from './viewusers/viewproduct.component';

const routes: Routes = [
  {path:'view' , component:ViewusersComponent},
  {path:'create' , component:CreateuserComponent},
  {path:'login' , component:LoginComponent},
  {path:'userhome' , component:UserhomeComponent},
  {path:'logout' , component:UserlogoutComponent}
 

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
