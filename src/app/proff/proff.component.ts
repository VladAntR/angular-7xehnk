import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proff',
  templateUrl: './proff.component.html',
  styleUrls: ['./proff.component.scss']
})
export class ProffComponent implements OnInit {
  title = 'Технології'
  subtitle = 'Які я використовую'
  titleCard_1 = 'HTML/CSS'
  description_1 = 'HTML мова тегів, засобами якої здійснюється розмічання веб-сторінок для мережі Інтернет.\nCSS спеціальна мова стилю сторінок, щовикористовується для опису їхнього зовнішнього вигляду.'
  titleCard_2 = 'JavaScript'
  description_2 = 'Бургер меню, Слайдери, Випадаючі списки,Калькулятор, Лічильники, Фільтри, Анімації.\nJS - динамічна об\'єктно-орієнтована прототипна мова програмування.'
  titleCard_3 = 'TypeScript'
  description_3 = 'Виконання елементарних завдань. Базове розуміння.\nTypeScript - мова програмування, представлена Microsoft восени 2012; позиціонується як засіб розробки веб-застосунків, що розширює можливості JavaScript'
  titleCard_4 = 'Дизайн Figma'
  description_4 = 'Figma-векторний онлайн-сервіс розробки інтерфейсів та прототипування з можливістю організації спільної роботи, що розробляється однойменною компанією.'
  titleBigCard = 'Переваги роботи зі мною'
  firstAdvantage = '-Якісно виконана робота'
  secondAdvantage = '-Доступний 24/7'
  thirdAdvantage  = '-Гарантований результат'
  fourthAdvantage = '-Робота без обману'
  fifthAdvantage  = 'Завжди відкрити для пропозицій та поправок'
  sixthAdvantage = '-Усе відбувається швидко та беззайвих клопотів'
  seventhAdvatage = 'Використовую лише новітні технології до реалізації ваших завдань'
  eighthAdvatage = '-Приємний та неконфліктний у розмові'


  constructor() { }

  ngOnInit(): void {
    
  }

}
