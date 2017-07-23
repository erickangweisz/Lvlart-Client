import { Component, OnInit } from '@angular/core'
import { ImageService } from '../../services/image/image.service'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-gallery-illustration',
  templateUrl: './gallery-illustration.component.html',
  styleUrls: ['./gallery-illustration.component.css'],
  providers: [ ImageService, UserService ]
})
export class GalleryIllustrationComponent implements OnInit {

  public imagesIdOrderByCategory = new Array
  public titleImagesOrderByCategory = new Array
  public scoreImagesOrderByCategory = new Array
  public userIdImagesOrderByCategory = new Array

  public usernames = new Array
  public scoreUsers = new Array

  public thereAreImages = false
  public imageModal = 0

  constructor(private imageService: ImageService, private userService: UserService) {}

  ngOnInit() {
    this.getXimagesOrderByCategory(8, 'illustration')
  }

  getXimagesOrderByCategory(number: number, category: string) {
    this.imageService.getXimagesOrderByCategory(number, category).subscribe(res => {
      for (let i=0; i<8; i++) {
        this.imagesIdOrderByCategory.push(res['images'][i]._id)
        this.titleImagesOrderByCategory.push(res['images'][i].title)
        this.scoreImagesOrderByCategory.push(res['images'][i].score)
        this.userIdImagesOrderByCategory.push(res['images'][i].id_user)

        this.getUserById(this.userIdImagesOrderByCategory[i])
      }
      this.thereAreImages = true
      /*this.imagesIdOrderByCategory.reverse()
      this.titleImagesOrderByCategory.reverse()
      this.scoreImagesOrderByCategory.reverse()
      this.userIdImagesOrderByCategory.reverse()
      for (let j=0; j<this.userIdImagesOrderByCategory.length; j++) {
        this.getUserById(this.userIdImagesOrderByCategory[j])
      }*/
    })
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.scoreUsers.push(res['user'].score)
      this.usernames.push(res['user'].username) // push usernames in array *
    })
  }

  // select image modal
  selectImage(i: number) {
    this.imageModal = i
  }

}
