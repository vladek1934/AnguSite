import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ProviderService} from '../shared/services/provider.service';
import {ICategory, IProduct} from '../shared/models/models';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public output = '';
  public stringArray: string[] = [];
  public categories: ICategory[] = [];
  public loading = false;
  public products: IProduct[] = [];
  public name: any = '';
  public isLogged = false;
  public login = '';
  public password = '';
  constructor(private provider: ProviderService) {
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLogged = true;
    }

    this.provider.sendMessage.subscribe(res => {
      this.isLogged = res;
    });
  }

  logout() {
    this.provider.logout().then(res => {
      this.isLogged = false;
      localStorage.clear();
    });
  }

}
