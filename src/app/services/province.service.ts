import { HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpParams, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regioni } from '../modules/admin/components/province/regioni';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.auth.getToken();

    if (token) {
        req = req.clone({
          headers: req.headers.set('Authorization',
            'Bearer ' + token)
        });
    }

    return next.handle(req);
  }



  constructor(private http: HttpClient, private auth: AuthService) { }
  getRegion(): Observable<any> {
  // const headers = new HttpHeaders().set('Authorization', `Bearer ${this.auth.getToken()}`);
    return this.http.get<any>(`https://sgpa-util-sv.ossv.intra.infocamere.it/api/v1/territoriali/regioni?app=RNTS`);
  }
    getProvinceOfSelectedRegion( kcIstat: number): Observable<any> {
      
      return this.http.get<any>(`https://sgpa-util-sv.ossv.intra.infocamere.it/api/v1/territoriali/province?app=RNTS&idRegione=${kcIstat}`);
  }

  getComuneOfSelectedProvince( ksiglaProv: string): Observable<any> {
      
    return this.http.get<any>(`https://sgpa-util-sv.ossv.intra.infocamere.it/api/v1/territoriali/comuni?app=RNTS&pv=${ksiglaProv }`);
}

getCapOfSelectedComune(kcCatastale:string):Observable<any> {
  return this.http.get<any>(`https://sgpa-util-sv.ossv.intra.infocamere.it/api/v1/territoriali/cap?app=RNTS&comuCCatastale=${kcCatastale}`);
}

//   import { Component, OnInit } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable } from 'rxjs';

// import { AuthenticationService } from './authentication.service';

// @Component({
//   selector: 'app-region-select',
//   template: `
//     <div class="container pt-5 pb-5">
//       <div class="col-12">
//         <div class="d-flex flex-wrap justify-content-between">
//           <label for="">REGION</label>
//           <select>
//             <option *ngFor="let region of listRegioni" [value]="region.kcIstat">{{region.nome}}</option>
//           </select>
//         </div>
//       </div>
//     </div>
//   `
// })
// export class RegionSelectComponent implements OnInit {
//   listRegioni: any[];

//   constructor(private http: HttpClient, private auth: AuthenticationService) {}

//   ngOnInit() {
//     this.getRegion().subscribe(data => {
//       this.listRegioni = data;
//     });
//   }

//   getRegion(): Observable<any[]> {
//     const headers = new HttpHeaders().set('Authorization', `Bearer ${this.auth.token}`);

//     return this.http.get<any[]>(`https://sgpa-util-sv.ossv.intra.infocamere.it/api/v1/territoriali/regioni?app=RNTS`, { headers });
//   }
// }
  //   login({ name, fName, codiceFiscale }: any): Observable<any> {
  //     if (name !== null && fName !== null && codiceFiscale !== null) {
  //       const options = new HttpParams()
  //         .set('app', 'RNTS')
  //         .set('cf', codiceFiscale)
  //         .set('cognome', fName)
  //         .set('nome', name);

  //       this.http.get<any>(

  //         `https://sgpa-auth-sv-os.intra.infocamere.it/apifree/v1/test/authCF?`, { params: options }).subscribe((result) => {
  //           this.token = result.idToken;
  //           this.router.navigate(['/admin/home']);

  //           console.log(" getting token by using http");
  //           console.log(this.token);
  //           this.setToken(this.token);
  //           this.decodedToken = this.helper.decodeToken(this.token);
  //           console.log("decoded and set ");
  //           console.log(this.decodedToken);
  //         });


  //       return of({ name, fName });

  //     }
  //     return throwError(() => new Error('i am error'));
  //   }

  // }



}
