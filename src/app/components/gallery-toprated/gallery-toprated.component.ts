import { Component, OnInit } from '@angular/core'
import { ImageService } from '../../services/image/image.service'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-gallery-toprated',
  templateUrl: './gallery-toprated.component.html',
  styleUrls: ['./gallery-toprated.component.css'],
  providers: [ ImageService, UserService ]
})
export class GalleryTopratedComponent implements OnInit {

  public imagesOrderByScore = new Array
  public imagesTitles = new Array
  public imagesId = new Array

  public usernames = new Array
  public usersId = new Array

  public thereAreImages = false
  public thereAreUsers = false

  public scoreUsers = new Array

  public imgModal = 0

  constructor(private imageService: ImageService, private userService: UserService) {}

  ngOnInit() {
    this.getXimagesOrderByScore(3)
  }

  getXimagesOrderByScore(number: number) {
    this.imageService.getXimagesOrderByScore(number).subscribe(res => {
      this.imagesOrderByScore = res['images']
      let lengthImages = this.imagesOrderByScore.length
      for (let i=0; i<lengthImages; i++) {
        this.imagesId[i] = this.imagesOrderByScore[i]['_id']
        this.usersId[i] = this.imagesOrderByScore[i]['id_user']
        this.imagesTitles[i] = this.imagesOrderByScore[i]['title']
        this.thereAreImages = true

        //this.getUserById(this.usersId[i]) // call all the users *
      }
      this.usersId.reverse()
      this.imagesId.reverse()
      this.getUserById(this.usersId[0])
      this.getUserById(this.usersId[1])
      this.getUserById(this.usersId[2])
    })
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.usernames.push(res['user'].username) // push usernames in array *
      this.scoreUsers.push(res['user'].score)
    })
  }

  selectImage(i: number) {
    this.imgModal = i
  }

}
