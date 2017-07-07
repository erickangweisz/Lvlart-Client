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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getXusersOrderByCategory(6, 'illustration')
  }

  getXusersOrderByCategory(number: number, category: string) {
    this.userService.getXusersOrderByCategory(number, category).subscribe(res => {
      this.bestillustration = res['users']
      this.thereAreUsers = true
    })
  }

}
