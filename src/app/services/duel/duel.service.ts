import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DuelService {

  constructor(private http: Http) {}

  public getXduelsOrderByCreation(number: number) {
    return this.http.get('http://localhost:3001/api/duels/' + number + '/orderbycreation')
        .map(res => res.json())
  }

  public getAllDuelsByUserId(userId: string) {
    return this.http.get('http://localhost:3001/api/duels/user/' + userId)
        .map(res => res.json())
  }

}
