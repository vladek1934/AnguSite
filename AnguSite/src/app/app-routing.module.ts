import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AboutComponent} from './about/about.component';
import {ListItemComponent} from './list-item/list-item.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import {ItemFullInfoComponent} from './item-full-info/item-full-info.component';

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'about', component: AboutComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'products', component: ListItemComponent},
  {path: 'products/:id', component: ItemFullInfoComponent},
  {path: ':categoryName/products', component: ListItemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
