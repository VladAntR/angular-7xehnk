import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-best-work',
  templateUrl: './the-best-work.component.html',
  styleUrls: ['./the-best-work.component.scss']
})
export class TheBestWorkComponent implements OnInit {
  title = 'Роботи'
  subtitle = 'Найкращі'

  constructor() { }

  ngOnInit(): void {
  }

}
