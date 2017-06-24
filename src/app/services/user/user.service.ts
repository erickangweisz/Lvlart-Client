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

}
