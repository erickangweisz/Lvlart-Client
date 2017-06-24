import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'carousel-header',
  templateUrl: './carousel-header.component.html',
  styleUrls: ['./carousel-header.component.css'],
  providers: [ UserService ]
})

export class CarouselHeaderComponent implements OnInit {

  private usersOrderByScore: Array<string>

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getXusersOrderByScore(3)
  }

  getXusersOrderByScore(number: number) {
    this.userService.getXusersOrderByScore(number).subscribe(res => { 
      console.log(res)
    })
  }

}