import { Component, OnInit } from '@angular/core'
import { CommentService } from '../../services/comment/comment.service'
import { UserService } from '../../services/user/user.service'

@Component({
  selector: 'app-profile-comments',
  templateUrl: './profile-comments.component.html',
  styleUrls: ['./profile-comments.component.css'],
  providers: [ CommentService, UserService ]
})
export class ProfileCommentsComponent implements OnInit {

  public userId = localStorage.getItem('user_id')
  public comments = new Array

  public textComment = new Array
  public idUserSender = new Array
  public createdAt = new Array

  public senderUsernames = new Array

  constructor(private commentService: CommentService,
              private userService: UserService) {}

  ngOnInit() {
    this.getCommentsByIdReceiver(this.userId)
  }

  getCommentsByIdReceiver(userId: string) {
    this.commentService.getCommentsByIdReceiver(userId).subscribe(res => {
      this.comments = res['comments']
      let lengthComments = this.comments.length

      for (let i=0; i<lengthComments; i++) {
        this.textComment[i] = this.comments[i]['comment']
        this.idUserSender[i] = this.comments[i]['id_user_sender']
        this.createdAt[i] = this.comments[i]['created_at']

        this.getUserById(this.idUserSender[i])
      }
    })
  }

  getUserById(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.senderUsernames.push(res['user'].username)
    })
  }

}
