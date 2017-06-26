import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../../services/login/login.service'

declare var $: any
declare var require: any

@Component({
  selector: 'app-signin-form',
  templateUrl: './signin-form.component.html',
  styleUrls: ['./signin-form.component.css'],
  providers: [ LoginService ]
})
export class SigninFormComponent implements OnInit {
  imgUrl = require('./assets/LA.png')

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onSubmit(value: any) {
    this.loginService.signin(value.email, value.password).subscribe(res => {})
      this.hideModal()
      if (localStorage.getItem('token')) this.router.navigate(['profile'])
      else this.router.navigate(['home'])
  }

  hideModal() {
    $('#login-modal').modal('toggle')
  }

  isCompleted() {
    if ($('#email').val() != '' && $('#password').val() != '') { 
      $('#submit').removeAttr('disabled')
      $('#submit').addClass('btn-success')
    } else {
      $('#submit').attr('disabled')
      $('#submit').removeClass('btn-success')
    } 
  }

}
