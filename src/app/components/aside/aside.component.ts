import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css'],
  providers: [ UserService ]
})
export class AsideComponent implements OnInit {

  public usersOrderByCategory: Array<string>

  public illustrationUsers: Array<any>
  public photographyUsers: Array<any>
  public modelingUsers: Array<any>

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getXusersOrderByCategory(10, 'illustration')
    this.getXusersOrderByCategory(10, 'photography')
    this.getXusersOrderByCategory(10, 'modeling')
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

}
