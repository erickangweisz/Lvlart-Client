import { Component, OnInit } from '@angular/core'
import { ImageService } from '../../services/image/image.service'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-gallery-photography',
  templateUrl: './gallery-photography.component.html',
  styleUrls: ['./gallery-photography.component.css'],
  providers: [ ImageService, UserService ]
})
export class GalleryPhotographyComponent implements OnInit {

  public imagesIdOrderByCategory = new Array
  public titleImagesOrderByCategory = new Array
  public scoreImagesOrderByCategory = new Array
  public userIdImagesOrderByCategory = new Array

  public usernames = new Array

  public thereAreImages = false
  public imageModal = 0

  constructor(private imageService: ImageService, private userService: UserService) {}

  ngOnInit() {
    this.getXimagesOrderByCategory(8, 'photography')
  }

  getXimagesOrderByCategory(number: number, category: string) {
    this.imageService.getXimagesOrderByCategory(number, category).subscribe(res => {
      for (let i=0; i<8; i++) {
        this.imagesIdOrderByCategory.push(res['images'][i]._id)
        this.titleImagesOrderByCategory.push(res['images'][i].title)
        this.scoreImagesOrderByCategory.push(res['images'][i].score)
        this.userIdImagesOrderByCategory.push(res['images'][i].id_user)

        this.getUserById(this.userIdImagesOrderByCategory[i])
        this.thereAreImages = true
      }
    })
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.usernames.push(res['user'].username) // push usernames in array *
    })
  }

  // select image modal
  selectImage(i: number) {
    this.imageModal = i
  }

}
