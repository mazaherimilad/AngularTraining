import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/users.model';
import { UserDataService } from 'src/app/services/data/user-data.service';

@Component({
  selector: 'app-users-update',
  templateUrl: './users-update.component.html',
  styleUrls: ['./users-update.component.css']
})
export class UsersUpdateComponent  {
id: number ;
user: User ;
constructor(private route: ActivatedRoute,private router: Router,
  private userService: UserDataService) { }

ngOnInit() {
  this.user = new User();

  this.id = this.route.snapshot.params['id'];
  
  this.userService.getUserById(this.id)
    .subscribe(data => {
      console.log(data)
      this.user = data;
    }, error => console.log(error));
}
updateUser() {
  this.userService.updateUser(this.id, this.user)
    .subscribe(data => {
      console.log(data);
      this.user = new User();
      this.gotoList();
    }, error => console.log(error));
}

onSubmit() {
  this.updateUser();    
}

gotoList() {
  this.router.navigate(['/users']);
}
}
