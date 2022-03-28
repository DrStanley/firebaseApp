import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

 
  errorMess = '';
  succesMess = '';
  username = 'werdfghj';
  password = '';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  RegisterUser() {
    console.log("JHEllo");
    debugger;
    if (this.username === '' || this.password === '') {
      this.errorMess = "Invalid input";
      return;
    }
    this.auth.SignUp(this.username, this.password)
      .then(res => {
        this.succesMess = "User Registered";
      })
      .catch(err => {
        this.errorMess = err.message;
        console.log(err);
      });

  }
}
