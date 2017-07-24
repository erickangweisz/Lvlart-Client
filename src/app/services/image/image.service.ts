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

  public getXimagesOrderByScore(number: number) {
    return this.http.get('http://localhost:3001/api/images/' + number + '/likes')
        .map(res => res.json())
  }

  public getImage(imageId: string) {
    return this.http.get('http://localhost:3001/api/image/' + imageId)
        .map(res => res.json())
  }

  public getXimagesOrderByCategory(number: number, category: string) {
    return this.http.get('http://localhost:3001/api/images/' + number + '/category/' + category)
        .map(res => res.json())
  }

  public getAllImagesByUserId(userId: string) {
    return this.http.get('http://localhost:3001/api/images/user/' + userId)
        .map(res => res.json())
  }

  public getXimagesByUserId(number: number, userId: string) {
    return this.http.get('http://localhost:3001/api/images/' + number + '/userid/' + userId)
        .map(res => res.json())
  }

}