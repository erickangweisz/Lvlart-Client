import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { LoginService } from '../../services/login/login.service'

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
  providers: [ LoginService ]
})
export class SignupFormComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  signUp(username: string, password: string, firstname: string, lastname: string, birthday: Date,
         avatar: string, email: string, category: string, profile_facebook: string, profile_twitter: string,
         profile_pinterest: string, img_head: string) {
    this.loginService.signup(username, password, firstname, lastname, birthday,
                             avatar, img_head, category, profile_facebook, profile_twitter,
                             profile_pinterest, email).subscribe(res => { 
                               this.router.navigate(['signin-form']) 
                             })
  }

}
