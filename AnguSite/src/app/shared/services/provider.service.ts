import {EventEmitter, Injectable} from '@angular/core';
import {IAuthRespose, IOrder, IProduct} from '../models/models';
import {HttpClient} from '@angular/common/http';
import {MainService} from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  public sendMessage = new EventEmitter<boolean>();

  constructor(http: HttpClient) {
    super(http);
  }

  get_products(): Promise<IProduct[]> {
    return this.get('http://localhost:8000/products/', {});
  }

  get_poduct_detail(id): Promise<IProduct> {
    return this.get('http://localhost:8000/products/' + id + '/', {});
  }

  get_category_products(categoryId): Promise<IProduct[]> {
    return this.get('http://localhost:8000/categories/' + categoryId + '/', {});
  }

  get_orders(): Promise<IOrder[]> {
    return this.get('http://localhost:8000/orders/', {});
  }

  auth(username: any, password: any): Promise<IAuthRespose> {
    return this.post('http://localhost:8000/login/', {
      username: username,
      password: password
    });
  }
  logout(): Promise<any> {
    return this.post('http://localhost:8000/logout/', {});
  }
}
