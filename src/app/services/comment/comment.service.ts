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

}
