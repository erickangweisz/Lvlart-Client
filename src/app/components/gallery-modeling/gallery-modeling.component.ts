import { Component, OnInit } from '@angular/core'
import { ImageService } from '../../services/image/image.service'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-gallery-modeling',
  templateUrl: './gallery-modeling.component.html',
  styleUrls: ['./gallery-modeling.component.css'],
  providers: [ ImageService, UserService ]
})
export class GalleryModelingComponent implements OnInit {

  public images = new Array

  public imagesIdOrderByCategory = new Array
  public titleImagesOrderByCategory = new Array
  public scoreImagesOrderByCategory = new Array
  public userIdImagesOrderByCategory = new Array

  public usernames = new Array
  public scoreUsers = new Array

  public thereAreImages = false
  public imageModal = 0

  public nUploadedImages = 8

  constructor(private imageService: ImageService, private userService: UserService) {}

  ngOnInit() {
    this.getXimagesOrderByCategory(this.nUploadedImages, 'modeling')
  }

  getXimagesOrderByCategory(number: number, category: string) {
    this.imageService.getXimagesOrderByCategory(number, category).subscribe(res => {
      this.images = res['images']
      let lengthImages = this.images.length
      for (let i=0; i<lengthImages; i++) {
        this.imagesIdOrderByCategory[i] = this.images[i]._id
        this.titleImagesOrderByCategory[i] = this.images[i].title
        this.scoreImagesOrderByCategory[i] = this.images[i].score
        this.userIdImagesOrderByCategory[i] = this.images[i].id_user

        this.getUserById(this.userIdImagesOrderByCategory[i])
      }
      this.thereAreImages = true
    })
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.usernames.push(res['user'].username) // push usernames in array *
      this.scoreUsers.push(res['user'].score)
    })
  }

  // select image modal
  selectImage(i: number) {
    this.imageModal = i
  }

  loadMoreImages() {
    this.getXimagesOrderByCategory(this.nUploadedImages += 4, 'modeling')
  }

}
