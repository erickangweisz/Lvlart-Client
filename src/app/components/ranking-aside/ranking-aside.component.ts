import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-ranking-aside',
  templateUrl: './ranking-aside.component.html',
  styleUrls: ['./ranking-aside.component.css'],
  providers: [ UserService ]
})
export class RankingAsideComponent implements OnInit {

  public usersOrderByCategory: Array<string>
  public usersOrderByVictories: Array<string>

  public illustrationUsers: Array<any>
  public photographyUsers: Array<any>
  public modelingUsers: Array<any>
  public victoriesUsers: Array<any>

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getXusersOrderByCategory(20, 'illustration')
    this.getXusersOrderByCategory(20, 'photography')
    this.getXusersOrderByCategory(20, 'modeling')

    this.getXusersOrderByVictories(20)
  }

  getXusersOrderByCategory(number: number, category: string) {
    this.userService.getXusersOrderByCategory(number, category).subscribe(res => {
      switch (category) {
        case 'illustration':
          this.illustrationUsers = res['users']
          break
        case 'photography':
          this.photographyUsers = res['users']
          break
        case 'modeling':
          this.modelingUsers = res['users']
      }
    })
  }

  getXusersOrderByVictories(number: number) {
    this.userService.getXusersOrderByVictories(number).subscribe(res => {
      for (let i=0; i<this.illustrationUsers.length; i++) {
        this.victoriesUsers = res['users']
      }
    })
  }

}
