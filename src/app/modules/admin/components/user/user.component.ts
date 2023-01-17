import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataPipe } from './user-data.pipe';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public auth:AuthService) { }
 
  ngOnInit(): void {
  }
  // chanegStyle(){
  //   var str = JSON.stringify(this.auth.decodedToken.js); 
  
  //   var re = /,/gi; 
  
  //   // Use of String replace() Method
  //   const newstr = str.replace(re, "<br>"); 
  // }
  

}
