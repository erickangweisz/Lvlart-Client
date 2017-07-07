import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'
import { CapitalizePipe } from '../../pipes/capitalize/capitalize.pipe'

@Component({
  selector: 'app-ranking-first',
  templateUrl: './ranking-first.component.html',
  styleUrls: ['./ranking-first.component.css'],
  providers: [ UserService ]
})
export class RankingFirstComponent implements OnInit {

  bestuser: any
  thereAreUser = false

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getXusersOrderByScore(1)
  }

  getXusersOrderByScore(number: number) {
    this.userService.getXusersOrderByScore(number).subscribe(res => {
      this.bestuser = res['users'][0]
      this.thereAreUser = true
    })
  }

}
