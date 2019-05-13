import { Component, OnInit } from '@angular/core';
import {Product} from '../shared/models/models';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  public products: Product[] = [{id: 0, name: '0', description: '0', price: 100},
                                {id: 1, name: '1', description: '1', price: 100},
                                {id: 2, name: '2', description: '2', price: 100},
                                {id: 3, name: '3', description: '3', price: 100},
                                {id: 4, name: '4', description: '4', price: 100}];

  constructor() { }

  ngOnInit() {
  }

}
