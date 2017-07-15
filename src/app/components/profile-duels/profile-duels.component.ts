import { Component, OnInit } from '@angular/core'
import { DuelService } from '../../services/duel/duel.service'
import { UserService } from '../../services/user/user.service'
import { ThemeService } from '../../services/theme/theme.service'
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-profile-duels',
  templateUrl: './profile-duels.component.html',
  styleUrls: ['./profile-duels.component.css'],
  providers: [ DuelService, ThemeService ]
})
export class ProfileDuelsComponent implements OnInit {

  public userid: string
  public duels = new Array

  // duels variables
  public duelsId = new Array
  public likesUserChallenged = new Array
  public likesUserChallenger = new Array
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

  public thereAreDuels = false
  public thereAreImages = false
  public imageModal = 0
  public lengthArray = 3 // length by default

  constructor(private duelService: DuelService, 
              private userService: UserService,
              private themeService: ThemeService,
              private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.userid = params['userid']
      })
      
    if (this.userid == null)
      this.userid = localStorage.getItem('user_id')
    else
      this.userid = localStorage.getItem('userid_lastvisited')

    this.getAllDuelsByUserId(this.userid)
  }

  getAllDuelsByUserId(userId: string) {
    this.duelService.getAllDuelsByUserId(userId).subscribe(res => {
      this.duels = res['duels']
      let lengthDuels = this.duels.length
      for (let i=0; i<lengthDuels; i++) {
        this.duelsId[i] = this.duels[i]['_id']
        this.themesId[i] = this.duels[i]['id_theme']

        this.usersChallengedId[i] = this.duels[i]['id_user_challenged']
        this.usersChallengerId[i] = this.duels[i]['id_user_challenger']

        this.likesUserChallenged[i] = this.duels[i]['likes_user_challenged']
        this.likesUserChallenger[i] = this.duels[i]['likes_user_challenger']

        if (this.duels[i]['id_image_challenged'] == null || 
            this.duels[i]['id_image_challenger'] == null) {
              this.thereAreImages = false
            } else {
              this.thereAreImages = true
            }

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
