import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/model/api.response';
import { User } from 'src/app/model/users.model';
import { UserDataService } from 'src/app/services/data/user-data.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Observable<any> | undefined;
  user:Observable<any> | undefined;
  constructor(private userService: UserDataService, private router: Router) { }
  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.users = this.userService.getUsers();
  }
  removeUser(id: number) {
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData(); 
        },
        error => console.log(error));
  }
  editUser(id: number) {

    this.userService.getUserById(id).subscribe(data=>{
      console.log(data);
      this.user = data;});
    this.router.navigate(['update', id]);
  }
  userDetails(id: number){
    this.router.navigate(['details', id]);
  }
  }


