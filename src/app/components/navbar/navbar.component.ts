import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  isAuthenticated() {
    if (localStorage.getItem('token')) return true
    else return false
  }

  hideSignInButton() {
    if (localStorage.getItem('token')) return false
    else return true
  }

  signOut() {
    localStorage.clear()
    this.router.navigate(['home'])
  }

}
