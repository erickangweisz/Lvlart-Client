import { Component, OnInit } from '@angular/core'
import { DuelService } from '../../services/duel/duel.service'
import { UserService } from '../../services/user/user.service'
import { ThemeService } from '../../services/theme/theme.service'

@Component({
  selector: 'app-duels-photography',
  templateUrl: './duels-photography.component.html',
  styleUrls: ['./duels-photography.component.css'],
  providers: [ DuelService, UserService, ThemeService ]
})
export class DuelsPhotographyComponent implements OnInit {

  public imageModal = 0

  // duels variables
  public duelsOrderByCategory = new Array
  public duelsId = new Array
  public thereAreDuels = false
  public likesUserChallenged = new Array
  public likesUserChallenger = new Array
  public idImageChallenged = new Array
  public idImageChallenger = new Array

  // users variables
  public usersChallengedId = new Array
  public usersChallengerId = new Array
  public challengedUsernames = new Array
  public challengerUsernames = new Array
  public scoreChallengedUsers = new Array
  public scoreChallengerUsers = new Array

  // themes variables
  public themesId = new Array
  public themesTitles = new Array
  public themesCategory = new Array

  constructor(private duelService: DuelService, 
              private userService: UserService,
              private themeService: ThemeService) {}

  ngOnInit() {
    this.getAllDuelsByCategory('photography')
  }

  getAllDuelsByCategory(category: string) {
    this.duelService.getAllDuelsByCategory(category).subscribe(res => {
      this.duelsOrderByCategory = res['duels']
      let lengthDuels = this.duelsOrderByCategory.length
      for (let i=0; i<lengthDuels; i++) {
        this.duelsId[i] = this.duelsOrderByCategory[i]['_id']
        this.themesId[i] = this.duelsOrderByCategory[i]['id_theme']

        this.usersChallengedId[i] = this.duelsOrderByCategory[i]['id_user_challenged']
        this.usersChallengerId[i] = this.duelsOrderByCategory[i]['id_user_challenger']

        this.likesUserChallenged[i] = this.duelsOrderByCategory[i]['likes_user_challenged']
        this.likesUserChallenger[i] = this.duelsOrderByCategory[i]['likes_user_challenger']

        this.idImageChallenger[i] = this.duelsOrderByCategory[i]['id_image_challenger']
        this.idImageChallenged[i] = this.duelsOrderByCategory[i]['id_image_challenged']

        this.thereAreDuels = true

        this.getUserByChallengedId(this.usersChallengedId[i])
        this.getUserByChallengerId(this.usersChallengerId[i])

        this.getThemesById(this.themesId[i])
      }
    })
  }

  // users
  getUserByChallengedId(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.challengedUsernames.push(res['user'].username)
      this.scoreChallengedUsers.push(res['user'].score)
    })
  }

  getUserByChallengerId(userId: string) {
    this.userService.getUserById(userId).subscribe(res => {
      this.challengerUsernames.push(res['user'].username)
      this.scoreChallengerUsers.push(res['user'].score)
    })
  }

  // themes
  getThemesById(themeId: string) {
    this.themeService.getTheme(themeId).subscribe(res => {
      this.themesTitles.push(res['theme'].title)
      this.themesCategory.push(res['theme'].category)
    })
  }

  // select image modal
  selectImage(i: number) {
    this.imageModal = i
  }

}
