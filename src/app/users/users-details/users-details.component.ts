import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/users.model';
import { UserDataService } from 'src/app/services/data/user-data.service';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent {
  id: number;
  user: User;

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

  list(){
    this.router.navigate(['users']);
  }
}
