import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  //variables
  title = 'Мої'
  subtitle = 'Контакти'


  constructor() { }

  ngOnInit(): void {
  }

}
