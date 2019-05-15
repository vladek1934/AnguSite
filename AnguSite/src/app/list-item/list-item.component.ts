import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../shared/models/models';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  public products: IProduct[] = [];
  private category = false;
  private categoryName;

  constructor(private route: ActivatedRoute, private provider: ProviderService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.categoryName) {
        this.provider.get_category_products(params.categoryName).then(res => {
          this.products = res;
          this.category = true;
          this.categoryName = params.categoryName;
        });
      } else {
        this.provider.get_products().then(res => {
          this.products = res;
        });
      }
    });
  }
}
