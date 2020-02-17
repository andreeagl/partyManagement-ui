import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { AuthenticationService } from '../../services/auth.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users;
  isLoggedIn = false;

  constructor(private usersService: UsersService,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authenticationService.isUserLoggedIn();
    console.log('menu ->' + this.isLoggedIn);
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      data => {this.users = data},
      err => console.log(err),
      () => console.log('users loaded')
    );
  }

  handleLogout() {
    this.authenticationService.logout();
  }
}
