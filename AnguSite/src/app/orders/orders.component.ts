import { Component, OnInit } from '@angular/core';
import {IOrder, IProduct} from '../shared/models/models';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  public orders: IOrder[] = [];

  constructor( private provider: ProviderService) { }

  ngOnInit() {
    this.provider.get_orders().then(res => {
      this.orders = res;
    });
  }

}
