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

  public nUploadedUsers = 3

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getXusersOrderByCategory(this.nUploadedUsers, 'photography')
  }

  getXusersOrderByCategory(number: number, category: string) {
    this.userService.getXusersOrderByCategory(number, category).subscribe(res => {
      this.bestphotography = res['users']
      this.thereAreUsers = true
    })
  }

  loadMoreUsers() {
    this.getXusersOrderByCategory(this.nUploadedUsers += 1, 'photography')
  }

}