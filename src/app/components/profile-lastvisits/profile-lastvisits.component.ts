import { Component, OnInit } from '@angular/core'

declare var $: any

@Component({
  selector: 'app-profile-lastvisits',
  templateUrl: './profile-lastvisits.component.html',
  styleUrls: ['./profile-lastvisits.component.css']
})
export class ProfileLastvisitsComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    $('#media').carousel({
        pause: true,
        interval: false
    })
  }

}
