import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMess = '';
  succesMess = '';
  username = 'werdfghj';
  password = '';
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  SubmitLogin() {
    console.log("JHEllo");
    debugger;
    if (this.username === '' || this.password === '') {
      this.errorMess = "Invalid input";
      return;
    }
    this.auth.SignIn(this.username, this.password)
      .then(res => {
        this.succesMess = JSON.stringify(res);
      })
      .catch(err => {
        this.errorMess = err.message;
        console.log(err);
      });

  }

}
