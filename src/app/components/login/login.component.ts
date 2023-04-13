import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/app/model/users.model';
import { AuthService } from 'src/app/services/auth.service';
import { UserDataService } from 'src/app/services/data/user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tk: any;
  user: User=new User();

  faLock = faLock;
  loginForm = new FormGroup({
    name: new FormControl(null, Validators.required),
    lname: new FormControl(null, Validators.required),
    codiceFiscale: new FormControl(null, Validators.required),
  });
  constructor(private auth: AuthService, private router: Router, private services: UserDataService) { }
  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {

      this.router.navigate(['/admin/home']);
    }

  }
  // showSpinner() {
  //   this.spinner.show();
  //   setTimeout(() => {
  //       /** spinner ends after 5 seconds */
  //       // this.spinner.hide();
  //   }, 2000);
  // }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe((result) => {
        console.log(result);
        this.services.createUser(this.user).subscribe(data=>
          console.log(data));
          this.user=new User();
          this.router.navigate(['/admin/home']);

          //this.router.navigate(['/users']);
      });

      // this.services.userBeanService().subscribe((response)=>{      
      //     this.handleSuccessfulResponse(response.message);
      //     console.log(this.services.userBeanService());
     // });
    
    }
    console.log("request ");
  }
  handleSuccessfulResponse(response: any){
    console.log(response);
  }
}








