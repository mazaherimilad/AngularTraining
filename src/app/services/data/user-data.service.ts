import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from 'src/app/model/api.response';
import {Observable} from "rxjs/index";
import { User } from 'src/app/model/users.model';
import { environment } from 'src/environments/environment';

export class userMessageBean{
  constructor(public message: string){}
}
@Injectable({
  providedIn: 'root'
})

export class UserDataService {


  constructor(private http: HttpClient) { }

   

  getUsers() : Observable<any> {
    return this.http.get<any>(`http://localhost:8080/users`);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get(`http://localhost:8080/users/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<any>('http://localhost:8080/users',user);
  }

  updateUser(id: number, value:any): Observable<Object> {
    return this.http.put<any>(`http://localhost:8080/users/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:8080/users/${id}`, {responseType: 'json'});
  }
}