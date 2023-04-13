import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/data/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService, private services: UserDataService) {

   }
  ngOnInit(): void {}
    logout(): void {
      this.auth.logout();
     // this. services.userBeanService();
    }
  

}
