import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
  providers: [ UserService ]
})
export class ProfileInfoComponent implements OnInit {

  public userid: string
  public username: string
  public score: number
  public experience: number
  public category: string

  public thereAreUser = false
  public urlImageInfo = ""

  public user = localStorage.getItem('user_id')

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
      this.username = res['user'].username
      this.score = res['user'].score
      this.experience = res['user'].experience
      this.category = res['user'].category
      
      this.getUrlImageInfo()
    })
  }

  getUrlImageInfo() {
    switch (this.category) {
      case 'illustration':
        this.urlImageInfo = 'http://localhost:3001/images/cyclops'
        break
      case 'photography':
        this.urlImageInfo = 'http://localhost:3001/images/spiderman'
        break
      case 'modeling':
        this.urlImageInfo = 'http://localhost:3001/images/superman'
        break
    }
  }

}
