import { Component, OnInit } from '@angular/core'
import { UserService } from '../../services/user/user.service'

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

  constructor(private userService: UserService) {}

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
    var fileAvatar = event.srcElement.files;
    console.log(fileAvatar);
  }

  onChangeImgHead(event) {
    var fileImgHead = event.srcElement.files;
    console.log(fileImgHead);
  }

}
