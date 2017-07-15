import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.css'],
  providers: [ UserService ]
})
export class ProfileViewComponent implements OnInit {

  public userid: string
  public visits: number

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userid = localStorage.getItem('user_id')
    this.getUserById(this.userid)
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.visits = res['user'].visits
    })
  }

}
