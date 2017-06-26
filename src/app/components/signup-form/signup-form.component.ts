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

  public strValue: string
  public categories = ['illustration', 'photography', 'modeling']

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onSubmit(value: any) {
    this.loginService.signup(value.username, value.password, value.firstname, value.lastname, value.birthday,
                             value.category, value.profile_facebook, value.profile_twitter,
                             value.profile_pinterest, value.email).subscribe(res => { 
                               this.router.navigate(['signin-form']) 
                             })
  }

}
