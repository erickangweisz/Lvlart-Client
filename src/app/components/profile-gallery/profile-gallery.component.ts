import { Component, OnInit } from '@angular/core'
import { ImageService } from '../../services/image/image.service'

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css'],
  providers: [ ImageService ]
})
export class ProfileGalleryComponent implements OnInit {

  public userId = localStorage.getItem('user_id')
  public images = new Array
  public imagesId = new Array
  public imagesTitle = new Array

  public imageModal = 0
  public arrayLength = 8 // length by default

  public thereAreImages = false

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getAllImagesByUserId(this.userId)
  }

  getAllImagesByUserId(userId: string) {
    this.imageService.getAllImagesByUserId(userId).subscribe(res => {
      this.images = res['images']
      let imagesLength = this.images.length
      if (imagesLength > 0) this.thereAreImages = true
      for (let i=0; i<imagesLength; i++) {
        this.imagesId[i] = this.images[i]._id
        this.imagesTitle[i] = this.images[i].title
      }
    })
  }

  // select image modal
  selectImage(i: number) {
    this.imageModal = i
  }

}
