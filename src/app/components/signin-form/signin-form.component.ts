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
  imgUrl = 'http://bootsnipp.com/img/logo.jpg'

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  signIn(email: string, password: string) {
    if (email && password) {
      this.loginService.signin(email, password).subscribe(res => {})
      this.hideModal()
      this.router.navigate(['profile'])
    } else {
      console.log('data entry error')
    }
  }

  hideModal() {
    $('#login-modal').modal('toggle')
  }

}
