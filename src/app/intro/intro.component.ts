import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  //Variables
  navButtonText = 'Найкращі роботи'
  TitleAboutMe = 'Антоняк Владислав \n front-end розробник, дизайнер '
  textAboutMe = 'Розпочав свій шлях змалого містечка Червоноград.\n На сьогоднійшній момент один із найкращих дизайнерів Львівської області. На ринку уже 5 років. Створить ваш веб сайт мрії.'
  button = 'Дізнатись більше'
  constructor() { }

  ngOnInit(): void {
  }

}
