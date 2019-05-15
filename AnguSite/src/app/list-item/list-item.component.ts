import { Component, OnInit } from '@angular/core';
import {IProduct} from '../shared/models/models';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  public products: IProduct[] = [{id: 0, name: '0', description: '0', price: 100, category: '0'}, // just until back is done
                                {id: 1, name: '1', description: '1', price: 100, category: '1'},
                                {id: 2, name: '2', description: '2', price: 100, category: '0'},
                                {id: 3, name: '3', description: '3', price: 100, category: '0'},
                                {id: 4, name: '4', description: '4', price: 100, category: '1'}];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    // this.provider.get_products().then(res => {
    //   this.products = res;
    // });
  }

}
