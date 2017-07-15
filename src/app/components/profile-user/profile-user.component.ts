import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css'],
  providers: [ UserService ]
})
export class ProfileUserComponent implements OnInit {

  public userid: string
  public visits: number

  constructor(private userService: UserService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.userid = params['userid']
      })
    this.getUserById(this.userid)
    localStorage.setItem('userid_lastvisited', this.userid)
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.visits = res['user'].visits
    })
  }

}

