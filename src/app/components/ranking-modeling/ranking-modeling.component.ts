import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-ranking-modeling',
  templateUrl: './ranking-modeling.component.html',
  styleUrls: ['./ranking-modeling.component.css'],
  providers: [ UserService ]
})
export class RankingModelingComponent implements OnInit {

  bestmodeling = new Array
  thereAreUsers = false

  public nUploadedUsers = 3

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getXusersOrderByCategory(this.nUploadedUsers, 'modeling')
  }

  getXusersOrderByCategory(number: number, category: string) {
    this.userService.getXusersOrderByCategory(number, category).subscribe(res => {
      this.bestmodeling = res['users']
      this.thereAreUsers = true
    })
  }

  loadMoreUsers() {
    this.getXusersOrderByCategory(this.nUploadedUsers += 1, 'modeling')
  }

}