import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../shared/models/models';
import {ProviderService} from '../shared/services/provider.service';
import {ɵDOMTestComponentRenderer} from "@angular/platform-browser-dynamic/testing";
import {decreaseElementDepthCount} from "@angular/core/src/render3/state";

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

  mouseEnter(imageId, zoomId) {
    const image = document.getElementById(imageId);
    document.getElementById(zoomId).style.left = image.offsetLeft + image.offsetWidth + 'px';
    document.getElementById(zoomId).style.top = image.offsetTop + 'px';
    document.getElementById(zoomId).style.width = image.offsetWidth + 'px';
    document.getElementById(zoomId).style.height = image.offsetHeight + 'px';
    document.getElementById(zoomId).style.display = 'block';
  }
  mouseLeave(zoomId) {
    document.getElementById(zoomId).style.display = 'none';
  }

  getMousePos(event, imageId, zoomImgId) {
    const image = document.getElementById(imageId);
    let x = event.x - image.offsetLeft + document.documentElement.scrollLeft;
    let y = event.y - image.offsetTop + document.documentElement.scrollTop;

    if (x < image.offsetWidth / 8) {
      x = image.offsetWidth / 8;
    }
    if (x > image.offsetWidth * 7 / 8) {
      x = image.offsetWidth * 7 / 8;
    }
    if (y < image.offsetHeight / 8) {
      y = image.offsetHeight / 8;
    }
    if (y > image.offsetHeight * 7 / 8) {
      y = image.offsetHeight * 7 / 8;
    }
    document.getElementById(zoomImgId).style.marginLeft = -x * 4 + image.offsetWidth * 2 + 'px';
    document.getElementById(zoomImgId).style.marginTop = -y * 4 + image.offsetHeight * 2 + 'px';
  }

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
