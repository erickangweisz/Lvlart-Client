import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'carousel-header',
  templateUrl: './carousel-header.component.html',
  styleUrls: ['./carousel-header.component.css'],
  providers: [ UserService ]
})

export class CarouselHeaderComponent implements OnInit {

  public usersOrderByScore: Array<string>
  public usersId = Array

  public thereAreUsers = false

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getXusersOrderByScore(3)
  }

  getXusersOrderByScore(number: number) {
    this.userService.getXusersOrderByScore(number).subscribe(res => {
      this.usersOrderByScore = res
      let lengthUsers = this.usersOrderByScore['users'].length
      for (let i=0; i<lengthUsers; i++) {
        this.usersId[i] = this.usersOrderByScore['users'][i]._id
        this.thereAreUsers = true
      }
    })
  }

}