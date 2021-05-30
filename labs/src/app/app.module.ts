import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HelpComponent } from './help/help.component';
import { DataserviceService } from './dataservice.service';
import { HttpClientModule } from '@angular/common/http';


import { ViewusersComponent } from './viewusers/viewusers.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { LoginComponent } from './login/login.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { UserlogoutComponent } from './userlogout/userlogout.component';
// import { ViewproductComponent } from './viewusers/viewproduct.component';
// import { CreateproductComponent } from './createproduct/createproduct.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewusersComponent,
    CreateuserComponent,
    LoginComponent,
    UserhomeComponent,
    UserlogoutComponent,
    // ViewproductComponent,
    // CreateproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [DataserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
