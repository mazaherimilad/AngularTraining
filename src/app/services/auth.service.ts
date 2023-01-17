import { Observable, of, throwError } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { UserJwt } from './user-jwt';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnInit {
  constructor(private router: Router, private http: HttpClient) { }
  helper = new JwtHelperService();
  decodedToken: any;
  token: any;
  ngOnInit() {
    this.decodedToken=sessionStorage.getItem('decodedToken');
    this.decodedToken = JSON.parse(this.decodedToken);


  }


  setToken(_tokenjwt: string): void {

    localStorage.setItem('Set', _tokenjwt);

  }
  storeDecodedToken(decodedToken: any) {
    localStorage.setItem('decodedToken', JSON.stringify(decodedToken));
}


  getDecodedToken() {
    this.token = localStorage.getItem('Set');
    if (this.token) {
        this.decodedToken = this.helper.decodeToken(this.token);
        console.log("dobare decode shod ");
    } else {
        console.log("Token not found in session storage");
    }
  
  }
  
  getToken(): string | null {
    return localStorage.getItem('Set');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('Set');
    this.router.navigate(['login']);
  }
  login({ name, fName, codiceFiscale }: any): Observable<any> {
    if (name !== null && fName !== null && codiceFiscale !== null) {
      const options = new HttpParams()
        .set('app', 'RNTS')
        .set('cf', codiceFiscale)
        .set('cognome', fName)
        .set('nome', name);

      this.http.get<any>(

        `https://sgpa-auth-sv-os.intra.infocamere.it/apifree/v1/test/authCF?`, { params: options }).subscribe((result) => {
          this.token = result.idToken;
          this.router.navigate(['/admin/home']);

          console.log(" getting token by using http");
          console.log(this.token);
          this.setToken(this.token);
          this.decodedToken = this.helper.decodeToken(this.token);
          this.storeDecodedToken(this.decodedToken);

          console.log("decoded and set ");
          console.log(this.decodedToken);
        });


      return of({ name, fName });
      
    }
    return throwError(() => new Error('i am error'));
  }

  

}