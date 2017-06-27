import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ImageService {

  constructor(private http: Http) {}

  public getXimagesOrderByLatestUpload(number: number) {
    return this.http.get('http://localhost:3001/api/images/' + number + '/latestupload')
        .map(res => res.json())
  }

}