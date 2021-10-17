import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { SocialRegComponent } from './social-reg/social-reg.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SocialRegComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
