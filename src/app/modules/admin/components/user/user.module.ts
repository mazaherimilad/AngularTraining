import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { UserDataPipe } from './user-data.pipe';



@NgModule({
  declarations: [
    

  
    
  ],
  imports: [
    UserRoutingModule,BrowserModule,CommonModule
  ]
})
export class UserModule { }
