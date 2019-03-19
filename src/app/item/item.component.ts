import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  name = 'Backpack'
  description = "Nice thing for containing something"
  constructor() { }

  ngOnInit() {
  }

}
