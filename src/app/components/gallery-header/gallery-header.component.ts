import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-gallery-header',
  templateUrl: './gallery-header.component.html',
  styleUrls: ['./gallery-header.component.css'],
  providers: [ UserService ]
})
export class GalleryHeaderComponent implements OnInit {

  public usersOrderByVisits: Array<string>
  public usersId = Array

  public thereAreUsers = false

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getXusersOrderByVisits(3)
  }

  getXusersOrderByVisits(number: number) {
    this.userService.getXusersOrderByVisits(number).subscribe(res => {
      this.usersOrderByVisits = res
      let lengthUsers = this.usersOrderByVisits['users'].length
      for (let i=0; i<lengthUsers; i++) {
        this.usersId[i] = this.usersOrderByVisits['users'][i]._id
        this.thereAreUsers = true
      }
    })
  }

}
