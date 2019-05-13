import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../shared/models/models';
import {ProviderService} from '../shared/services/provider.service';

@Component({
  selector: 'app-item-full-info',
  templateUrl: './item-full-info.component.html',
  styleUrls: ['./item-full-info.component.css']
})
export class ItemFullInfoComponent implements OnInit {
  public products: Product[] = [{id: 0, name: '0', description: '0', price: 100, category: '0'}, // just until back is done
                                {id: 1, name: '1', description: '1', price: 100, category: '1'},
                                {id: 2, name: '2', description: '2', price: 100, category: '0'},
                                {id: 3, name: '3', description: '3', price: 100, category: '0'},
                                {id: 4, name: '4', description: '4', price: 100, category: '1'}];

  public product: Product;

  constructor(private route: ActivatedRoute, private provider: ProviderService) { }

  ngOnInit() {
    // this.provider.get_product_detail(this.product.id).then(res => {
    //   this.products = res;
    // });

    this.route.params.subscribe(params => {
      if (this.products[params.id] !== undefined) {
        this.product = this.products[params.id];  // just until back is done
      }
    });
  }

}
