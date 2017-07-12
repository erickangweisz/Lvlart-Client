import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-profile-uploadimages',
  templateUrl: './profile-uploadimages.component.html',
  styleUrls: ['./profile-uploadimages.component.css']
})
export class ProfileUploadimagesComponent implements OnInit {

  public userId: string 

  constructor() {}

  ngOnInit() {
    this.userId = localStorage.getItem('user_id')
  }
  
  imageUploaded($event) {
    console.log(event)
  }

}
