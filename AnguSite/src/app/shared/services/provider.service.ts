import { Injectable } from '@angular/core';
import {IAuthRespose, IProduct} from '../models/models';
import {HttpClient} from '@angular/common/http';
import {MainService} from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }

  get_products(): Promise<IProduct[]> {
    return this.get('http://localhost:8000/products/', {});
  }

  get_poduct_detail(id): Promise<IProduct> {
    return this.get('http://localhost:8000/products/' + id + '/', {});
  }


  auth(username: any, password: any): Promise<IAuthRespose> {
    return this.post('http://localhost:8000/login', {
      username: username,
      password: password
    });
  }
}
