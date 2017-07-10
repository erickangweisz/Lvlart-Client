import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css'],
  providers: [ UserService ]
})
export class ProfileEditComponent implements OnInit {

  idUser = localStorage.getItem('user_id')
  user: any
  thereAreUser = false

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit() {
    this.getUserById(this.idUser)
    this.chooseFile() // show file selected
  }

  chooseFile() {
    var inputs = document.querySelectorAll('.file-input')

    for (var i = 0, len = inputs.length; i < len; i++) {
      customInput(inputs[i])
    }

    function customInput (el) {
      const fileInput = el.querySelector('[type="file"]')
      const label = el.querySelector('[data-js-label]')
      
      fileInput.onchange =
      fileInput.onmouseout = function () {
        if (!fileInput.value) return
        
        var value = fileInput.value.replace(/^.*[\\\/]/, '')
        el.className += ' -chosen'
        label.innerText = value
      }
    }
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.user = res['user']
      this.thereAreUser = true
    })
  }

  onChangeAvatar(event) {
    var fileAvatar = event.target.files[0]
    console.log(fileAvatar)
    //this.uploadAvatar(fileAvatar)
  }

  onChangeImgHead(event) {
    var fileImgHead = event.srcElement.files
    console.log(fileImgHead)
  }

  uploadAvatar(body: any) {
    this.userService.uploadAvatar(this.idUser, body).subscribe(res => {
      console.log(res)
    })
  }

  updateUser() {
    let body = {
      'firstname': (<HTMLInputElement> document.getElementById('firstname')).value,
      'lastname': (<HTMLInputElement> document.getElementById('lastname')).value,
      'profile_facebook': (<HTMLInputElement> document.getElementById('profile_facebook')).value,
      'profile_twitter': (<HTMLInputElement> document.getElementById('profile_twitter')).value,
      'profile_pinterest': (<HTMLInputElement> document.getElementById('profile_pinterest')).value 
    }

    this.userService.updateUser(this.idUser, body).subscribe(res => {
      this.router.navigate(['app-profile/view'])
    })
  }

  changePassword(oldpass: string, newpass: string, repeatnewpass: string) {
    if (oldpass == this.user.password && newpass == repeatnewpass) {
      let body = {
        'password': newpass
      }
      this.userService.updateUser(this.idUser, body).subscribe(res => {
        this.router.navigate(['app-profile/view'])
      })
    } else {
      // handler error
      console.log('ERROR')
    }
    
  }

}
