import { Component, OnInit } from '@angular/core'
import { LoginService } from '../../services/login/login.service'
import { Router } from '@angular/router'

declare var $: any

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
  providers: [ LoginService ]
})
export class SigninFormComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  signIn(email: string, password: string) {
    if (email && password) {
      this.loginService.signin(email, password).subscribe(res => {})
      this.hideModal()
    } else {
      console.log('falta uno de los campos')
    }
  }

  hideModal() {
    $('#login-modal').modal('toggle')
  }

}
