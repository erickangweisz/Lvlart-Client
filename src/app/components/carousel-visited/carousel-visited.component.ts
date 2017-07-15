import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

declare var $:any

@Component({
  selector: 'app-carousel-visited',
  templateUrl: './carousel-visited.component.html',
  styleUrls: ['./carousel-visited.component.css'],
  providers: [ UserService ]
})
export class CarouselVisitedComponent implements OnInit {

  public usersOrderByVisits: Array<string>
  public lengthUsers: number
  public usersId = new Array

  public thereAreUsers = false

  constructor(private userService: UserService) {}

  ngOnInit() {
    $('#media').carousel({
        pause: true,
        interval: false
    })
    this.getXusersOrderByVisits(33)
  }

  getXusersOrderByVisits(number: number) {
    this.userService.getXusersOrderByVisits(number).subscribe(res => {
      this.usersOrderByVisits = res

      this.lengthUsers = this.usersOrderByVisits['users'].length
      for (let i=0; i<this.lengthUsers; i++) {
        this.usersId[i] = this.usersOrderByVisits['users'][i]._id
        this.thereAreUsers = true
      }
    })
  }

}
