import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.scss']
})
export class NumberComponent implements OnInit {
  //Variables
  homeTitle = 'Додаткова інформація'
  homeSubtitle = 'Статистичні Дані'
  title = 'Числа'
  subtitle = 'Все говорять про.'
  procentsQualityWork = '100%'
  textQualityWork = 'Якість роботи'
  markAverage = '4.9'
  textMarkAverage = 'Середня оцінка'

  constructor() { }

  ngOnInit(): void {
  }

}
