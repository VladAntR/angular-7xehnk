import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keys',
  templateUrl: './keys.component.html',
  styleUrls: ['./keys.component.scss']
})
export class KeysComponent implements OnInit {
  //Variables
  title = 'Додаткова інформація'
  subtitle = 'Прицип роботи'
  beginWork = '-У вас  зявляється бажання створення власного бізнесу.'
  principle_2 = '-Ви проходите до мене ми обговорюємо основні питання.'
  principle_3 = '-Триває розробка. Ви цілодобово має доступ до проекту, щоб стежити за етапами розробки. (Підчас якої ви можете вносити поправки)'
  endWork = '-Отримуєте кінцевий результат. (Оплата)'
  button = 'Більше'

  constructor() { }

  ngOnInit(): void {
  }

}
