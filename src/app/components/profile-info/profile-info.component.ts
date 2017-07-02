import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css'],
  providers: [ UserService ]
})
export class ProfileInfoComponent implements OnInit {

  public userid = localStorage.getItem('user_id')
  public username: string
  public score: number
  public experience: number

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUserById(localStorage.getItem('user_id'))
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.username = res['user'].username
      this.score = res['user'].score
      this.experience = res['user'].experience
    })
  }

}
