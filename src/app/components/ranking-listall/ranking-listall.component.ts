import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-ranking-listall',
  templateUrl: './ranking-listall.component.html',
  styleUrls: ['./ranking-listall.component.css'],
  providers: [ UserService ]
})
export class RankingListallComponent implements OnInit {

  bestusers = new Array
  thereAreUsers = false

  public nUploadedUsers = 3

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getXusersOrderByScore(this.nUploadedUsers)
  }

  getXusersOrderByScore(number: number) {
    this.userService.getXusersOrderByScore(number).subscribe(res => {
      this.bestusers = res['users']
      this.thereAreUsers = true
    })
  }

  loadMoreUsers() {
    this.getXusersOrderByScore(this.nUploadedUsers += 1)
  }

}
