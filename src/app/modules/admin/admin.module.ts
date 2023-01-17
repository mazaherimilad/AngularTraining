import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from "./components/footer/footer.component";
import { ServicesComponent } from './components/services/services.component';
import { ForgetPasswordComponent } from 'src/app/components/forget-password/forget-password.component';
import { JWTComponent } from './components/jwt/jwt.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserComponent } from './components/user/user.component';
import { UserDataPipe } from './components/user/user-data.pipe';
import { ProvinceComponent } from './components/province/province.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    UserComponent,
    FooterComponent,
    ServicesComponent,ForgetPasswordComponent,
    ForgetPasswordComponent,
    JWTComponent,UserDataPipe,ProvinceComponent
  
  ],
  imports: [CommonModule , 
   AdminRoutingModule,FormsModule
  ],schemas:[CUSTOM_ELEMENTS_SCHEMA],  exports:[]
})
export class AdminModule { }
