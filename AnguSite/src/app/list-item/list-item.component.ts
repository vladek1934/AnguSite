import { Component, OnInit } from '@angular/core';
import {IProduct} from '../shared/models/models';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  public products: IProduct[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    this.provider.get_products().then(res => {
      this.products = res;
    });
  }

}
