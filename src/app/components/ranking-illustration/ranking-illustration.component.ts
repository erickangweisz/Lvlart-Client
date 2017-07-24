import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-ranking-illustration',
  templateUrl: './ranking-illustration.component.html',
  styleUrls: ['./ranking-illustration.component.css'],
  providers: [ UserService ]
})
export class RankingIllustrationComponent implements OnInit {

  bestillustration = new Array
  thereAreUsers = false

  public nUploadedUsers = 3

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getXusersOrderByCategory(this.nUploadedUsers, 'illustration')
  }

  getXusersOrderByCategory(number: number, category: string) {
    this.userService.getXusersOrderByCategory(number, category).subscribe(res => {
      this.bestillustration = res['users']
      this.thereAreUsers = true
    })
  }

  loadMoreUsers() {
    this.getXusersOrderByCategory(this.nUploadedUsers += 1, 'illustration')
  }

}
