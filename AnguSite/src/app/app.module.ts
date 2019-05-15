import { BrowserModule } from '@angular/platform-browser';
import { ClassProvider, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ItemFullInfoComponent } from './item-full-info/item-full-info.component';
import { ListItemComponent } from './list-item/list-item.component';
import {AppRoutingModule} from './app-routing.module';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CommentComponent } from './comment/comment.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ProviderService} from './shared/services/provider.service';
import {AuthInterceptor} from './AuthInterceptor';
import { HeaderComponent } from './header/header.component';
import { OrdersComponent } from './orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ItemFullInfoComponent,
    ListItemComponent,
    CommentSectionComponent,
    CommentComponent,
    HeaderComponent,
    OrdersComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    ProviderService,
    <ClassProvider> {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
