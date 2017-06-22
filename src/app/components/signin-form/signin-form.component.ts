import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
  providers: [ LoginService ]
})
export class SigninFormComponent implements OnInit {

  constructor(private loginService: LoginService) {}

  ngOnInit() {}

  signIn(email: string, password: string) {
    if (email && password) {
      this.loginService.signin(email, password).subscribe(res => {})
    } else {
      console.log('falta uno de los campos')
    }
  }

}
