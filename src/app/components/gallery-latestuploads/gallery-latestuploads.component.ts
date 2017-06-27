import { Component, OnInit } from '@angular/core'
import { ImageService } from '../../services/image/image.service'

@Component({
  selector: 'app-gallery-latestuploads',
  templateUrl: './gallery-latestuploads.component.html',
  styleUrls: ['./gallery-latestuploads.component.css'],
  providers: [ ImageService ]
})
export class GalleryLatestuploadsComponent implements OnInit {

  public imagesOrderByLatestUpload: Array<string>
  public imagesId = new Array
  public thereAreImages = false

  public imageModal = 0

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.getXimagesOrderByLatestUpload(6)
  }

  getXimagesOrderByLatestUpload(number: number) {
    this.imageService.getXimagesOrderByLatestUpload(number).subscribe(res => {
      this.imagesOrderByLatestUpload = res['images']
      let lengthImages = this.imagesOrderByLatestUpload.length
      for (let i=0; i<lengthImages; i++) {
        this.imagesId[i] = this.imagesOrderByLatestUpload[i]['_id']
        this.thereAreImages = true
      }
    })
  }

  selectImage(i: number) {
    this.imageModal = i
  }

}
