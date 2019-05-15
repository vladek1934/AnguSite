import {Component, OnInit, Input} from '@angular/core';
import {IProduct} from '../shared/models/models';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() product: IProduct;

  constructor() {
  }

  ngOnInit() {
  }

}
