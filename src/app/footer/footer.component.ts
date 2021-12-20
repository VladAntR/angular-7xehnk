import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  textFooter = 'Розпочав свій шлях змалого містечка Червоноград. На сьогоднійшній момент один із найкращих дизайнерів Львівської області. На ринку уже 5 років.Створить ваш веб сайт мрії.'
  menu = 'Меню'
  home = 'Головна'
  technology = 'Технології'
  princepleWork = 'Принцип роботи'
  contacts = 'Контакти'
  the_bestWork = 'Найкращі роботи'
  constructor() { }

  ngOnInit(): void {
  }

}
