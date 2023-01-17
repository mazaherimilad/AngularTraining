import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  tk:any;

faLock=faLock;
  loginForm= new FormGroup({
    name:new FormControl(null, Validators.required),
    fName:new FormControl(null, Validators.required),
    codiceFiscale:new FormControl(null, Validators.required),
  });
  constructor(private auth:AuthService, private router:Router ) { }
  
  ngOnInit(): void {
    if(this.auth.isLoggedIn()){

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
      this.auth.login(this.loginForm.value).subscribe( (result) => {
          console.log(result);
        }
      );
    }
  }
  }
    


    
  
  


