import { Component, OnInit } from '@angular/core'
import { FileUploader } from 'ng2-file-upload'
import { ImageService } from '../../services/image/image.service'

@Component({
    selector: 'app-profile-uploadimages',
    templateUrl: './profile-uploadimages.component.html',
    styleUrls: ['./profile-uploadimages.component.css'],
    providers: [ ImageService ]
})
export class ProfileUploadimagesComponent implements OnInit {
  public userId: string
  public token: string
  public uploader:FileUploader = new FileUploader({ url:'http://localhost:3001/api/saveimage' })

  constructor(private imageService: ImageService) {}

  ngOnInit() {}

  saveImage() {
    this.userId = localStorage.getItem('user_id')
    this.token = localStorage.getItem('token')

    console.log(this.userId)
    console.log(this.token)

    this.uploader.onBeforeUploadItem = (fileItem: any) => {
      fileItem.formData.push( { category: 'illustration' } )
      fileItem.formData.push( { id_user: this.userId } )
      console.log(fileItem.formData)
    }
  }

  /*onSubmit(value: any) {
    this.imageService.saveImage(value.title, value.description, 
                                value.user_id, value.category)
                                .subscribe(res => {})
  }*/

} 
