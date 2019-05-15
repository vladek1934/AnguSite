import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IProduct} from '../shared/models/models';
import {ProviderService} from '../shared/services/provider.service';
import {ɵDOMTestComponentRenderer} from '@angular/platform-browser-dynamic/testing';
import {decreaseElementDepthCount} from '@angular/core/src/render3/state';

@Component({
  selector: 'app-item-full-info',
  templateUrl: './item-full-info.component.html',
  styleUrls: ['./item-full-info.component.css']
})
export class ItemFullInfoComponent implements OnInit {
  public product: IProduct;
  private loaded = false;

  constructor(private route: ActivatedRoute, private provider: ProviderService) { }

  // This is code for lupa
  mouseEnter(imageId, zoomId, areaId) {
    const image = document.getElementById(imageId);
    document.getElementById(zoomId).style.left = image.offsetLeft + image.offsetWidth + 'px';
    document.getElementById(zoomId).style.top = image.offsetTop + 'px';
    document.getElementById(zoomId).style.width = image.offsetWidth + 'px';
    document.getElementById(zoomId).style.height = image.offsetHeight + 'px';
    document.getElementById(zoomId).style.display = 'block';

    document.getElementById(areaId).style.display = 'block';
  }
  mouseLeave(zoomId, areaId) {
    document.getElementById(zoomId).style.display = 'none';

    document.getElementById(areaId).style.display = 'none';
  }

  getMousePos(event, imageId, zoomImgId, areaId) {
    const zoomLevel = 2;

    const image = document.getElementById(imageId);
    let x = event.x - image.offsetLeft + document.documentElement.scrollLeft;
    let y = event.y - image.offsetTop + document.documentElement.scrollTop;

    if (x < image.offsetWidth / zoomLevel / 2) {
      x = image.offsetWidth / zoomLevel / 2;
    }
    if (x > image.offsetWidth * (zoomLevel * 2 - 1) / zoomLevel / 2) {
      x = image.offsetWidth * (zoomLevel * 2 - 1) / zoomLevel / 2;
    }
    if (y < image.offsetHeight / zoomLevel / 2) {
      y = image.offsetHeight / zoomLevel / 2;
    }
    if (y > image.offsetHeight * (zoomLevel * 2 - 1) / zoomLevel / 2) {
      y = image.offsetHeight * (zoomLevel * 2 - 1) / zoomLevel / 2;
    }
    document.getElementById(zoomImgId).style.marginLeft = -x * zoomLevel + image.offsetWidth * zoomLevel / 2 + 'px';
    document.getElementById(zoomImgId).style.marginTop = -y * zoomLevel + image.offsetHeight * zoomLevel / 2 + 'px';
    document.getElementById(zoomImgId).style.transform = 'scale(' + zoomLevel + ')';

    document.getElementById(areaId).style.left = (x + image.offsetLeft - image.offsetWidth / zoomLevel / 2) + 'px';
    document.getElementById(areaId).style.top = (y + image.offsetTop - image.offsetHeight / zoomLevel / 2) + 'px';
    document.getElementById(areaId).style.width = (image.offsetWidth / zoomLevel) + 'px';
    document.getElementById(areaId).style.height = (image.offsetHeight / zoomLevel) + 'px';
  }
  // end of lupa

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.provider.get_poduct_detail(params.id).then(res => {
        this.product = res;
        this.loaded = true;
      });
    });
  }

}
