import { Component, OnInit } from '@angular/core'
import { ImageService } from '../../services/image/image.service'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-gallery-latestuploads',
  templateUrl: './gallery-latestuploads.component.html',
  styleUrls: ['./gallery-latestuploads.component.css'],
  providers: [ ImageService, UserService ]
})
export class GalleryLatestuploadsComponent implements OnInit {

  public imagesOrderByLatestUpload: Array<string>
  public imagesId = new Array
  public thereAreImages = false
  
  public usernames = new Array
  public usersId = new Array
  public thereAreUsers = false
  public scoreUsers = new Array

  public imageModal = 0
  public nUploadedImages = 6

  constructor(private imageService: ImageService, private userService: UserService) {}

  ngOnInit() {
    this.getXimagesOrderByLatestUpload(this.nUploadedImages)
  }

  getXimagesOrderByLatestUpload(number: number) {
    this.imageService.getXimagesOrderByLatestUpload(number).subscribe(res => {
      this.imagesOrderByLatestUpload = res['images']
      let lengthImages = this.imagesOrderByLatestUpload.length
      for (let i=0; i<lengthImages; i++) {
        this.imagesId[i] = this.imagesOrderByLatestUpload[i]['_id']
        this.usersId[i] = this.imagesOrderByLatestUpload[i]['id_user']
        this.thereAreImages = true

        this.getUserById(this.usersId[i]) // call all the users *
      }
      // Temporary solution
      /*this.usersId.reverse() 
      this.imagesId.reverse()
      for (let j=0; j<this.usersId.length; j++) {
        this.getUserById(this.usersId[j])
      }*/
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
    this.getXimagesOrderByLatestUpload(this.nUploadedImages += 6)
  }
  
}
