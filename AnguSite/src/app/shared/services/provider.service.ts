import { Injectable } from '@angular/core';
import {Product} from '../models/models';
import {HttpClient} from '@angular/common/http';
import {MainService} from './main.service';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {

  constructor(http: HttpClient) {
    super(http);
  }
}
