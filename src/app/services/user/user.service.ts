import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  
  constructor(private http: Http) {}

  public getHeaders() {
    let headers = new Headers()
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'))

    return headers;
  }

  public getXusersOrderByScore(number: number) {
    return this.http.get('http://localhost:3001/api/users/' + number + '/score')
        .map(res => res.json())
  }

  public getXusersOrderByVisits(number: number) {
    return this.http.get('http://localhost:3001/api/users/' + number + '/visits')
        .map(res => res.json())
  }

  public getXusersOrderByCategory(number: number, category: string) {
    return this.http.get('http://localhost:3001/api/users/' + number + '/category/' + category)
        .map(res => res.json())
  }

  public getUserById(userId: string) {
    return this.http.get('http://localhost:3001/api/user/' + userId)
        .map(res => res.json())
  }

  public getXusersOrderByVictories(number: number) {
    return this.http.get('http://localhost:3001/api/users/' + number + '/victories')
        .map(res => res.json())
  }

  public uploadAvatar(userId: string, body: any) {
    return this.http.put('http://localhost:3001/api/user/' + userId + '/uploadavatar', body)
        .map(res =>  res.json())
  }

  public updateUser(userId: string, body: any) {
    let headers = this.getHeaders()
    return this.http.put('http://localhost:3001/api/user/' + userId + '/updateuser', body, { headers: headers })
        .map(res => res.json())
  }

}
