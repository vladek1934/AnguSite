import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ItemFullInfoComponent } from './item-full-info/item-full-info.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ItemFullInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
