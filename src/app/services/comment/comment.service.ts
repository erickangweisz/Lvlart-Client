import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class CommentService {

  constructor(private http: Http) {}

  public getCommentsByIdReceiver(userId: string) {
    return this.http.get('http://localhost:3001/api/comments/receiver/' + userId)
        .map(res => res.json())
  }

  public createComment(comment: string, id_user_receiver: string, id_user_sender: string) {
    let body = {
      "comment": comment,
      "id_user_receiver": id_user_receiver,
      "id_user_sender": id_user_sender
    }
    return this.http.post('http://localhost:3001/api/comment', body)
        .map(res => res.json())
  }

}