import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-ranking-photography',
  templateUrl: './ranking-photography.component.html',
  styleUrls: ['./ranking-photography.component.css'],
  providers: [ UserService ]
})
export class RankingPhotographyComponent implements OnInit {

  bestphotography = new Array
  thereAreUsers = false

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getXusersOrderByCategory(6, 'photography')
  }

  getXusersOrderByCategory(number: number, category: string) {
    this.userService.getXusersOrderByCategory(number, category).subscribe(res => {
      this.bestphotography = res['users']
      this.thereAreUsers = true
    })
  }

}