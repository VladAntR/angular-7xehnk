import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  //Variables nav
  home = 'Головна'
  technology = 'Технології'
  princepleWork = 'Принцип роботи'
  contacts = 'Контакти'

  constructor() { }

  ngOnInit(): void {
  }

}
