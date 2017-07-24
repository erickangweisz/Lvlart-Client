import { Component, OnInit } from '@angular/core'
import { ImageService } from '../../services/image/image.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-profile-gallery',
  templateUrl: './profile-gallery.component.html',
  styleUrls: ['./profile-gallery.component.css'],
  providers: [ ImageService ]
})
export class ProfileGalleryComponent implements OnInit {

  public userid: string
  public images = new Array
  public imagesId = new Array
  public imagesTitle = new Array

  public imageModal = 0
  public arrayLength = 8 // length by default

  public thereAreImages = false
  public nUploadedImages = 4

  constructor(private imageService: ImageService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.userid = params['userid']
      })
      
    if (this.userid == null)
      this.userid = localStorage.getItem('user_id')
    else
      this.userid = localStorage.getItem('userid_lastvisited')

    this.getXimagesByUserId(this.nUploadedImages, this.userid)
  }

  getXimagesByUserId(number: number, userId: string) {
    this.imageService.getXimagesByUserId(number, userId).subscribe(res => {
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

  loadMoreImages() {
    this.getXimagesByUserId(this.nUploadedImages += 4, this.userid)
  }

}
