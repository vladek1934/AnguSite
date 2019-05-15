import {EventEmitter, Injectable} from '@angular/core';
import {IAuthRespose, IOrder, IProduct} from '../models/models';
import {HttpClient} from '@angular/common/http';
import {MainService} from './main.service';
import * as moment from 'moment';
import _date = moment.unitOfTime._date;

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

  create_order(product): Promise<IOrder> {
    return this.post('http://localhost:8000/orders/new/', {
      product: product,
      name: product.name
    });
  }



  auth(username: any, password: any): Promise<IAuthRespose> {
    return this.post('http://localhost:8000/login/', {
      username: username,
      password: password
    });
  }

  register(username: any, password1: any, email: any): Promise<IAuthRespose> {
    return this.post('http://localhost:8000/register/', {
      username: username,
      email: email,
      password: password1
    });
  }

  logout(): Promise<any> {
    return this.post('http://localhost:8000/logout/', {});
  }
}
