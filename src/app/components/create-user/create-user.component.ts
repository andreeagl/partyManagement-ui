import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  userform: FormGroup;
  validMessage: string = "";
  
  ngOnInit(): void {
    this.userform = new FormGroup({
      email: new FormControl('', Validators.required),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      cnp: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    })
  }

  submitCreateUser() {

    if(this.userform.valid) {
      this.validMessage = "User creation was submitted.";
      this.usersService.createUser(this.userform.value).subscribe(
        data => {
          this.userform.reset();
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Fill out mandatory fields";
    }
  }

}
