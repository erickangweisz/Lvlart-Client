import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class UserService {
  
  constructor(private http: Http) {}

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

}
