import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class ThemeService {

  constructor(private http: Http) {}

  public getTheme(themeId: string) {
    return this.http.get('http://localhost:3001/api/theme/' + themeId)
        .map(res => res.json())
  }

}
