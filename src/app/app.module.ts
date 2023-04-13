import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { ProvinceService } from './services/province.service';
import { UsersListComponent } from './users/users-list/users-list.component';
import { UsersUpdateComponent } from './users/users-update/users-update.component';
import { UsersCreateComponent } from './users/users-create/users-create.component';
import { UserDataService } from './services/data/user-data.service';
import { UsersDetailsComponent } from './users/users-details/users-details.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    UsersListComponent,
    UsersUpdateComponent,
    UsersCreateComponent,
    UsersDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule,CommonModule,BrowserModule,HttpClientModule,CommonModule,FormsModule
    
  ], schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthService,UserDataService,{
    provide: HTTP_INTERCEPTORS,
    useClass: ProvinceService,
    multi: true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
