import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { ProffComponent } from './proff/proff.component';
import { KeysComponent } from './keys/keys.component';
import { NumberComponent } from './number/number.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TheBestWorkComponent } from './the-best-work/the-best-work.component';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    ProffComponent,
    KeysComponent,
    NumberComponent,
    FooterComponent,
    NavigationComponent,
    TheBestWorkComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
