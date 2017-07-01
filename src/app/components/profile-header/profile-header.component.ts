import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css'],
  providers: [ UserService ]
})
export class ProfileHeaderComponent implements OnInit {

  public userid = localStorage.getItem('user_id')
  public firstname: string
  public lastname: string
  public urlfacebook: string
  public urltwitter: string
  public urlpinterest: string

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserById(localStorage.getItem('user_id'))
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.firstname = res['user'].firstname
      this.lastname = res['user'].lastname
      this.urlfacebook = res['user'].profile_facebook
      this.urltwitter = res['user'].profile_twitter
      this.urlpinterest = res['user'].profile_pinterest
    })
  }

}
