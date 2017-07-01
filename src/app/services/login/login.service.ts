import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {

  constructor(private http: Http) {}

  public signin(email: string, password: string) {
    let body = {
      "email": email,
      "password": password
    }
    return this.http.post('http://localhost:3001/api/signin', body)
      .map(res => {localStorage.setItem('token', res.json().token), localStorage.setItem('user_id', res.json().user_id)}, console.log('The token has been saved successfully on localStorage'))
  }

  public signup(username: string, password: string, firstname: string, lastname: string, birthday: Date,
                category: string, profile_facebook: string, profile_twitter: string,
                profile_pinterest: string, email: string) {
    let body = {
      "username": username,
      "password": password,
      "firstname": firstname,
      "lastname": lastname,
      "birthday": birthday,
      "avatar": null,
      "email": email,
      "category": category,
      "profile_facebook": profile_facebook,
      "profile_twitter": profile_twitter,
      "profile_pinterest": profile_pinterest,
      "img_head": null
    }
    return this.http.post('http://localhost:3001/api/signup', body)
      .map(res => console.log(res))
  }

}
