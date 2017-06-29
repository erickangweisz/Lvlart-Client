import { Component, OnInit } from '@angular/core'
import { DuelService } from '../../services/duel/duel.service'
import { UserService } from '../../services/user/user.service'
import { ThemeService } from '../../services/theme/theme.service'

@Component({
  selector: 'app-gallery-duels',
  templateUrl: './gallery-duels.component.html',
  styleUrls: ['./gallery-duels.component.css'],
  providers: [ DuelService, UserService, ThemeService ]
})
export class GalleryDuelsComponent implements OnInit {

  public imageModal = 0

  // duels variables
  public duelsOrderByCreation = new Array
  public duelsId = new Array
  public thereAreDuels = false
  public likesUserChallenged = new Array
  public likesUserChallenger = new Array

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
    this.getXduelsOrderByCreation(3)
  }

  getXduelsOrderByCreation(number: number) {
    this.duelService.getXduelsOrderByCreation(number).subscribe(res => {
      this.duelsOrderByCreation = res['duels']
      let lengthDuels = this.duelsOrderByCreation.length
      for (let i=0; i<lengthDuels; i++) {
        this.duelsId[i] = this.duelsOrderByCreation[i]['_id']
        this.themesId[i] = this.duelsOrderByCreation[i]['id_theme']

        this.usersChallengedId[i] = this.duelsOrderByCreation[i]['id_user_challenged']
        this.usersChallengerId[i] = this.duelsOrderByCreation[i]['id_user_challenger']

        this.likesUserChallenged[i] = this.duelsOrderByCreation[i]['likes_user_challenged']
        this.likesUserChallenger[i] = this.duelsOrderByCreation[i]['likes_user_challenger']

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
