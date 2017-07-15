import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css'],
  providers: [ UserService ]
})
export class ProfileHeaderComponent implements OnInit {

  public userid: string
  public firstname: string
  public lastname: string
  public urlfacebook: string
  public urltwitter: string
  public urlpinterest: string
  public imghead: string
  public avatar: string

  public urlImageNoHeader = "http://localhost:3001/images/noheader"
  public urlImageNoAvatar = "http://localhost:3001/images/noavatar"

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.userid = params['userid']
      })
      
    if (this.userid == null)
      this.userid = localStorage.getItem('user_id')
    else
      this.userid = localStorage.getItem('userid_lastvisited')

    this.getUserById(this.userid)
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.firstname = res['user'].firstname
      this.lastname = res['user'].lastname
      this.urlfacebook = res['user'].profile_facebook
      this.urltwitter = res['user'].profile_twitter
      this.urlpinterest = res['user'].profile_pinterest
      this.imghead = res['user'].img_head
      this.avatar = res['user'].avatar
    })
  }

}
