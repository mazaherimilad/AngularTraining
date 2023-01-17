import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  helper=new JwtHelperService; 
  token=undefined;
  title = 'angular-routing';
  constructor(public authsService:AuthService){}
  ngOnInit(){
   const token= localStorage.getItem('token');
  this.authsService.decodedToken=this.helper.decodeToken(token as string);
  }

}

